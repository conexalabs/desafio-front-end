import React from 'react';
import { useStorageReducer } from 'react-storage-hooks';

const HandleLocalStorage = () => {
    const verificaCNPJRepetido = (cnpj, lista) => {
        // Função Boolean com regex para encontrar CNPJ repetidos
        return Boolean(lista.find(item => item.cnpj.replace(/\D/g, '') === cnpj.replace(/\D/g, '')));
    }


    const reducer = (state, action) => {
        switch(action.type){
            case 'add':
                // Garante que o react hooks veja a alteração
                // no array de empresasRecentes
                let newArray = [];
                state.empresasRecentes.map(item => newArray.push(item));
                
                // Garante que não tenha empresas repetidas na lista
                if(!verificaCNPJRepetido(action.payload.cnpj, state.empresasRecentes)){
                    newArray.push(action.payload);
                }

                return {
                    ...state,
                    empresasRecentes: newArray
                }
            default: 
                return state;
        }
    }

    // Inicia local storage
    const [ localizadorLocalStorage, setListRecentes, writeError ] = useStorageReducer(localStorage, 'localizador-cnpj', reducer, { empresasRecentes: [] });

    return {
        localizadorLocalStorage,
        setListRecentes
    }
};

export default HandleLocalStorage;