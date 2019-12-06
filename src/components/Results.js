import React from 'react';
import {slice} from 'ramda';
import classnames from 'classnames';

// material
import {
    CircularProgress,
    Grid,
    makeStyles,
    withStyles,
} from '@material-ui/core';

// fa
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

// components
import Company from './Company';

const useStyles = makeStyles(theme => ({
    resultsContainer: {
        flex: 1,
        display: 'flex',
        backgroundImage: 'linear-gradient(to left, #388669, #459a9e)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainerLeft: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 20,
    },
    iconContainerRight: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 20,
    },
    icon: {
        color: 'white',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    iconDisabled: {
        display: 'none',
    },
    noResultsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noResultsText: {
        fontSize: 20,
        color: 'white',
    },
    noResultsIcon: {
        margin: 20,
        color: 'white',
    },
}));

const WhiteCircularProgress = withStyles({
    root: {
        color: 'white',
    },
})(CircularProgress);

const maxFeaturedCompanies = 4;

function Results(props) {
    const classes = useStyles();
    const {
        companies,
        loading,
        featuredIndex,
        increase,
        decrease,
        selectCompany,
        setOpenDetails,
    } = props;

    function getFeaturedCompanies() {
        if (companies.length <= maxFeaturedCompanies) return companies;
        return slice(featuredIndex, featuredIndex + maxFeaturedCompanies, companies);
    }

    function onClickLeftArrow() {
        if (leftArrowEnabled()) {
            decrease();
        }
    }

    function onClickRightArrow() {
        if (rightArrowEnabled()) {
            increase();
        }
    }

    function leftArrowEnabled() {
        if (featuredIndex === 0) return false;
        return true;
    }

    function rightArrowEnabled() {
        const companiesSize = companies.length;
        if (
            featuredIndex + maxFeaturedCompanies === companiesSize ||
            companiesSize <= 4
        ) return false;
        return true;
    }

    function onSelectCompany(company) {
        selectCompany(company);
        setOpenDetails(true);
    }

    function renderCompanies() {

        if (loading) {
            return <WhiteCircularProgress size={50}/>;
        }

        if (!companies.length) {
            return (
                <div className={classes.noResultsContainer}>
                    <FontAwesomeIcon
                        className={classes.noResultsIcon}
                        icon={faSearch}
                        size='6x'
                    />
                    <span className={classes.noResultsText}>Localize acima a primeira empresa</span>
                </div>
            );
        }

        return (
            <Grid container>
                <Grid item xs={12} md={2}>
                    <div
                        className={classes.iconContainerLeft}
                        onClick={onClickLeftArrow}
                    >
                        <FontAwesomeIcon
                            className={
                                classnames({
                                    [classes.iconDisabled]: !leftArrowEnabled(),
                                    [classes.icon]: leftArrowEnabled(),
                                })
                            }
                            icon={faChevronLeft}
                            size='3x'
                        />
                    </div>
                </Grid>
                {
                    getFeaturedCompanies().map((company, index) => (
                        <Grid
                            item
                            xs={12}
                            md={2}
                            onClick={() => onSelectCompany(company)}
                            key={index}
                        >
                            <Company company={company}/>
                        </Grid>
                    ))
                }
                <Grid item xs={12} md={2}>
                    <div
                        className={classes.iconContainerRight}
                        onClick={onClickRightArrow}
                    >
                        <FontAwesomeIcon
                            className={
                                classnames({
                                    [classes.iconDisabled]: !rightArrowEnabled(),
                                    [classes.icon]: rightArrowEnabled(),
                                })
                            }
                            icon={faChevronRight}
                            size='3x'
                        />
                    </div>
                </Grid>
            </Grid>
        );
    }

    return (
        <div className={classes.resultsContainer}>
            {renderCompanies()}
        </div>
    );
}

export default Results;
