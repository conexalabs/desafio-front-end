import React from 'react';
import { Link } from 'react-router-dom'
import { removeCaracter } from '../helper/removeCaracter'
import { removeCaracterURL } from '../helper/urlCaracter'

function LocalizadorItem({ item }) {

    const { cidade, uf, cep, endereco, empresa, cnpj } = item
    const removeCaracterCep = removeCaracter(cep)
    const cleanURLEmpresa = removeCaracterURL(empresa)
    const cleanURL = removeCaracterURL(endereco)

    return (
        <div className="card">
            <div className="card-body">
                <Link to={`/maps/${cidade}/${uf}/${removeCaracterCep}/${cleanURL}/${cleanURLEmpresa}/${cnpj}`}>                
                    <h5>{item.empresa}</h5>
                    <p>Razão social</p>

                    <h5>{item.cnpj}</h5>
                    <p>CNPJ</p>

                    <h5>{item.endereco}</h5>
                    <p className="margim-bottom-remove">Endereço</p>
                </Link>
            </div>
        </div>
    )
}

export default LocalizadorItem;