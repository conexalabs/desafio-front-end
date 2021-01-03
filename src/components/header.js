import React, { Component } from 'react';
import axios from 'axios'
import LocalizadorItem from './../components/list'
import InputMask from 'react-input-mask'

//Functions
import { FaBuilding } from 'react-icons/fa'
import { removeCaracter } from '../helper/removeCaracter'

//Carousel
import Carousel from 'react-elastic-carousel'
import { breakPoints } from '../helper/breackPoints'
import { arrowStyled } from '../helper/renderArrow'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cnpj: '',
            error: '',
            itemArray: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let { name, value } = event.target
        this.setState({ [name]: value })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const state = this.state

        if (state.cnpj.length <= 0) {
            state.error = `Favor digite o CNPJ`
            this.setState(state)
            return
        }

        try {
            let formatCNPJ = removeCaracter(state.cnpj)
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/cnpj/${formatCNPJ}`)

            const { data } = response
            if (data.status === "OK") {

                const interator = {
                    empresa: data.fantasia,
                    cnpj: data.cnpj,
                    endereco: `${data.numero} ${data.logradouro} ${data.bairro} ${data.municipio} ${data.uf}`,
                    bairro: data.bairro,
                    cidade: data.municipio,
                    uf: data.uf,
                    cep: data.cep
                }

                this.state.itemArray.unshift(interator)
                localStorage.setItem('items', JSON.stringify(this.state.itemArray))

                state.error = ''
                state.cnpj = ''
                this.setState(state)
            } else {
                state.error = data.message
                state.cnpj = ''
                this.setState(state)
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { error } = this.state
        return (
            <div className="flex-conteiner">
                <header>
                    <h1><FaBuilding /> Localizador de Empresas</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="content">
                            <InputMask
                                mask="99.999.999/9999-99"
                                type="text"
                                name="cnpj"
                                value={this.state.cnpj}
                                onChange={this.handleChange}
                                placeholder="CNPJ..." />

                            <button className="localizar">
                                Localizar
                            </button>
                        </div>

                        {error.length > 0 &&
                            <span className="error">{error}</span>}
                    </form>

                </header>

                {this.state.itemArray.length > 0 ?
                    <section>
                        <Carousel breakPoints={breakPoints()} renderArrow={arrowStyled} pagination={false} className="allItem">
                            {this.state.itemArray.map((item, index) => (
                                <LocalizadorItem key={index} item={item} />
                            ))}
                        </Carousel>
                    </section> : <section>
                        <div style={{ margin: 'auto', textAlign: 'center' }}>
                            <h4>Localize acima a primeira empresa.</h4>
                        </div>
                    </section>}
            </div>
        );
    }
}

export default Header;