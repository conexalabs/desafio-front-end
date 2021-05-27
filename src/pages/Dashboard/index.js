import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import MaskedInput from '../../services/MaskedInput'
import validarCNPJ from '../../services/validaCNPJ'
import './style.scss'
import searchImg from '../../assets/search.png'


const Dashboard = () => {
    const [newCnpj, setNewCnpj] = useState('')
    const [empresas, setEmpresas] = useState(() => {
        const storagedEmpresas = localStorage.getItem('@LocalizadorEmpresas:dadosEmpresas')

        if(storagedEmpresas){
            return JSON.parse(storagedEmpresas)
        }else{
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('@LocalizadorEmpresas:dadosEmpresas', JSON.stringify(empresas))
    }, [empresas])
  
    async function handleNewSearch(event){
        event.preventDefault()

        if(validarCNPJ(newCnpj)){
            const response = await api.get(`/${newCnpj}`)    
            const empresa = response.data    
            setEmpresas([...empresas, empresa])
        }else{
            alert("O CNPJ informado não é valido")           
        }       
    }     
    
    
    function cheacaEmpresasConsultadas(){
        if(empresas.length == 0){
            return (          
                <div className="search">
                    <img src={searchImg} placeholder="Search Image" />
                    <h1>Localize acima a primeira empresa</h1>
                </div>
         
            )
        }else {
           return (
                <>
                    {empresas.map(emp => (                                            
                            
                            <a href="">
                                <div class="card">                               
                                    <div class="container">
                                        <h5>{emp.nome} <br/> <h6>Razão Social</h6></h5>
                                        <p>{emp.cnpj}<br/>  <h6>CNPJ</h6></p>
                                        <p>{emp.logradouro} {emp.numero} {emp.bairro} {emp.municipio} <br/> <h6>Endereço</h6></p>
                                    </div>
                                </div>
                            </a>
                    
                        
                    ))}
                </>
           )
        }
    }
       
   
    return (
        <div className="dashboard">
        
            <div className="buscador">
                <h1><i class="fas fa-building"></i> Localizador de Empresas</h1>              

                <form onSubmit={handleNewSearch}>
                    <MaskedInput value={newCnpj} onChange={(event) => setNewCnpj(event.target.value)} />
                    <button type="submit">LOCALIZAR</button>
                </form>
            </div>

            <div className="empresasConsultadas">
                {cheacaEmpresasConsultadas()}
            </div>
            


        </div>
    )
}

export default Dashboard