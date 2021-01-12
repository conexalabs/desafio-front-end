import React, { useState } from 'react'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { BaseUrl } from '../constants/constants'
import { checkCNPJ } from '../utils/checkCNPJ'
import CompanyCard from './CompanyCard'
import { CompanyBox, Container, SearchBox, SearchButton, SearchInput, SearchInputBox } from '../styled/styled'
import { Typography } from '@material-ui/core'

function Search(){
    const [cnpj, setCnpj] = useInput("") // input controlado
    const [company, setCompany] = useState({})
    const [companyDetails, setCompanyDetails] = useState(false)

    const {companyName, companyCNPJ, companyAddress, companyCounty} = company

    const checkCnpj = checkCNPJ(cnpj) // checa se o formato corresponde ao cnpj

    const getCompany = () => {
        //setCompanyDetails(true)

       axios.get(`https://cors-anywhere.herokuapp.com/${BaseUrl}${checkCnpj}`, {
           headers: {
               Authorization: "d967a1ebbd242bf1c82b9c943a120e6741c02c2c7e8fc4fd7e53d157dcfda3ad"
           }
       })
            .then(res => {

                console.log(res)

                console.log(res.data.cnpj)

                setCompany({companyName: res.data.nome, companyCNPJ: res.data.cnpj, companyAddress: res.data.logradouro, companyCounty: res.data.municipio})
                
                //setCompanyDetails(true)
                //
                //localStorage.setItem("Company", JSON.stringify//(company))
            })
            .catch(err => console.log(err))
    }

    const search = () => {

        if(checkCnpj !== false) {
            getCompany()            
        } else {
            setCompanyDetails(false)
        }

    }
    
    return (
        <Container>

            <SearchBox>
                <SearchInputBox>
                    <SearchInput 
                        variant="outlined" 
                        value={cnpj} 
                        onChange={setCnpj} 
                        size="small"
                        placeholder="CNPJ"
                    />
                    {cnpj.length > 18 ? <Typography variant="subtitle2">CNPJ inválido!</Typography> : ""}

                    <SearchButton onClick={search}>
                        <Typography variant="button" fontWeight="fontWeightBold" >Localizar</Typography>
                    </SearchButton>
                </SearchInputBox>           

            </SearchBox>
            <CompanyBox>
        
                    {companyDetails ? 
                        <CompanyCard 
                            name={companyName} 
                            cnpj={companyCNPJ}
                            address={companyAddress}
                            county={companyCounty}
                        /> 
                    : ""}
                    
            </CompanyBox>
        </Container>
    )
}

export default Search;