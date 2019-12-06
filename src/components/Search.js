import React, {useState} from 'react';

// fa
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';

// components
import {
    TextField,
    makeStyles,
    Button,
    Snackbar,
} from '@material-ui/core';

import {
    validarCNPJ,
    apenasNumeros,
} from '../utils';

// styles
const useStyles = makeStyles(theme => ({
    searchContainer: {
        marginBottom: 20,
    },
    searchTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 40,
    },
    searchInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    text: {
        fontSize: 60,
        paddingLeft: 20,
        color: theme.palette.primary.main,
    },
    icon: {
        paddingTop: 12,
        color: theme.palette.primary.main,
    },
    button: {
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 20,
        height: 50,
    },
    buttonText: {
        fontWeight: 700,
        fontSize: 20,
    },
    input: {
        width: 350,
    }
}));

function Search(props) {
    const classes = useStyles();
    const [cnpj, setCnpj] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [textMessage, setTextMessage] = useState('');

    const {
        fetchCompany,
        loading,
    } = props;

    function onFetchCompany() {
        const handledCNPJ = apenasNumeros(cnpj);
        if (validarCNPJ(handledCNPJ)) {
            fetchCompany(handledCNPJ);
        } else {
            setShowMessage(true);
            sendMessage('CNPJ Inválido');
        }
    }

    function sendMessage(text) {
        setTextMessage(text);
        setShowMessage(true);
    }

    const handleCloseMessage = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowMessage(false);
        setTextMessage('');
    }

    return (
        <div className={classes.searchContainer}>
            <div className={classes.searchTextContainer}>
                <FontAwesomeIcon className={classes.icon} icon={faBuilding} size='3x'/>
                <span className={classes.text}>
                    Localizador de Empresas
                </span>
            </div>
            <div className={classes.searchInputContainer}>
                <TextField
                    onChange={(event) => setCnpj(event.target.value)}
                    value={cnpj}
                    className={classes.input}
                    label="CNPJ..."
                    variant="outlined"
                />
                <Button
                    onClick={onFetchCompany}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >
                    <span className={classes.buttonText}>LOCALIZAR</span>
                </Button>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={showMessage}
                onClose={handleCloseMessage}
                autoHideDuration={3000}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={textMessage}
            />
        </div>

    );
}

export default Search;