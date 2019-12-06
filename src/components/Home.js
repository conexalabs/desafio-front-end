import React, {useState, useEffect} from 'react';
import jsonp from 'jsonp';
import {insert} from 'ramda';
import {makeStyles} from '@material-ui/core';

import receita from '../receita';

// components
import Search from './Search';
import Results from './Results';
import Details from './Details';

const useStyles = makeStyles(theme => ({
    homeContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
}));

function Home() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [featuredIndex, setFeaturedIndex] = useState(0);
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);

    const {api} = receita;

    useEffect(function() {
        let storedCompanies = localStorage.getItem('companies');
        if (storedCompanies) {
           storedCompanies = JSON.parse(storedCompanies);
           setCompanies(storedCompanies)
        }
    }, []);

    function fetchCompany(_cnpj) {
        const url = `${api}/${_cnpj}`;

        jsonp(url, null, (err, data) => {
            setLoading(true);
            if (err) {
                console.error(err);
                setLoading(false);
            } else {
                const {
                    nome,
                    cnpj,
                    logradouro,
                    numero,
                    fantasia,
                } = data;
                const company = {
                    name: nome,
                    cnpj: cnpj,
                    address: `${logradouro} ${numero}`,
                    fantasy: fantasia,
                }
                const updatedCompanies = insert(0, company, companies);
                setCompanies(updatedCompanies);
                localStorage.setItem('companies', JSON.stringify(updatedCompanies));
                setLoading(false);
            }
        });
    }

    function increaseFeaturedIndex() {
        setFeaturedIndex(featuredIndex + 1);
    }

    function decreaseFeaturedIndex() {
        setFeaturedIndex(featuredIndex - 1);
    }

    return (
        <div className={classes.homeContainer}>
            <Search
                loading={loading}
                fetchCompany={fetchCompany}
                featuredIndex={featuredIndex}
            />
            <Results
                loading={loading}
                companies={companies}
                featuredIndex={featuredIndex}
                increase={increaseFeaturedIndex}
                decrease={decreaseFeaturedIndex}
                selectCompany={setSelectedCompany}
                setOpenDetails={setOpenDetails}
            />
            <Details
                openDetails={openDetails}
                selectedCompany={selectedCompany}
                setOpenDetails={setOpenDetails}
            />
        </div>
    );
}

export default Home;
