import React from 'react'

function CompanyCard(props){

    return (
        <CompanyCard>
            <p>{props.name}</p>
            <p>{props.cnpj}</p>
            <p>{props.address}</p>
            <p>{props.county}</p>            
        </CompanyCard>
    )
}

export default CompanyCard;