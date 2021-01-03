import React from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Infor = (props) => {
    return (
        <div className="box-address">

            <Link to={'/'}>
                <FiArrowLeftCircle size={'2em'} color={'#3a8970'} />
            </Link>

            <h5>{props.empresa}</h5>
            <p>Razão social</p>

            <h5>{props.cnpj}</h5>
            <p>CNPJ</p>

            <h5>{props.endereco}</h5>
            <p className="removeMarginBottom">Endereço</p>

        </div>
    )
}

export default Infor