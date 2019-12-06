import React from 'react';
import classnames from 'classnames';

import {
    Card,
    makeStyles,
} from '@material-ui/core';

// fa
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    card: {
        margin: 20,
        padding: 20,
        borderRadius: 10,
        '&:hover': {
            cursor: 'pointer',
        },
        animation: '$fadeIn 1s',
    },
    cardDetails: {
        minWidth: 250,
        margin: 20,
        padding: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    infoGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 16,
        marginBottom: 16,
    },
    text: {
        color: theme.palette.primary.main,
        fontSize: 16,
    },
    title: {
        color: theme.palette.primary.main,
        fontSize: 16,
        fontWeight: 700,
    },
    icon: {
        color: theme.palette.primary.main,
        marginTop: 10,
        marginBottom: 10,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    displayNone: {
        display: 'none',
    },
}));

function Company(props) {
    const classes = useStyles();
    const {company = {}} = props;

    const {
        name = '-',
        cnpj = '-',
        address = '-',
    } = company;

    const {
        elevation,
        detailsMode,
        setOpenDetails,
    } = props;

    function onClose() {
        if (setOpenDetails) {
            setOpenDetails(false);
        }
    }

    return (
        <Card
            elevation={elevation ? elevation : 2}
            className={
                classnames({
                    [classes.cardDetails]: detailsMode,
                    [classes.card]: !detailsMode,
                    [classes.cardTransition]: !detailsMode,
                })
            }
        >
            <FontAwesomeIcon
                onClick={onClose}
                className={
                    classnames({
                        [classes.icon]: true,
                        [classes.displayNone]: !detailsMode,
                    })
                }
                icon={faArrowCircleLeft}
                size='2x'
            />
            <div className={classes.infoGroup}>
                <span className={classes.title}>{name}</span>
                <span className={classes.text}>Razão Social</span>
            </div>
            <div className={classes.infoGroup}>
                <span className={classes.title}>{cnpj}</span>
                <span className={classes.text}>CNPJ</span>
            </div>
            <div className={classes.infoGroup}>
                <span className={classes.title}>{address}</span>
                <span className={classes.text}>Endereço</span>
            </div>
        </Card>
    );
}

export default Company;
