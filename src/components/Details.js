import React from 'react';

// utils
import {handleStringToMaps} from '../utils';

// maps
import maps from '../maps';

// material
import {
    Dialog,
    makeStyles,
} from '@material-ui/core';

// components
import Company from './Company';

const useStyles = makeStyles(theme => ({
    detailsContainer: {
        position: 'relative',
    },
    company: {
        position: 'absolute',
        top: -20,
        left: -20,
    },
    mapContainer: {
        width: '100%',
        height: '100%',
    },
}));

function Details(props) {
    const classes = useStyles();
    const {
        selectedCompany,
        openDetails,
        closeOpenDetails,
        setOpenDetails,
    } = props;

    function getMapsURL() {
        if (!selectedCompany) return `https://www.google.com/maps/embed/v1/place?key=${maps.key}`;
        const {name, address} = selectedCompany;
        const rawText = `${name},${address}`;
        const handledText = handleStringToMaps(rawText);
        return `https://www.google.com/maps/embed/v1/place?key=${maps.key}&q=${handledText}`;
    }

    return (
        <div className={classes.detailsContainer}>
            <Dialog fullScreen open={openDetails} onClose={() => setOpenDetails(false)}>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{border: 0}}
                    src={getMapsURL()}
                    allowFullScreen>
                </iframe>
                <div className={classes.company}>
                    <Company
                        company={selectedCompany}
                        detailsMode={true}
                        elevation={3}
                        closeOpenDetails={closeOpenDetails}
                        setOpenDetails={setOpenDetails}
                    />
                </div>
            </Dialog>
        </div>
    )
};

export default Details;
