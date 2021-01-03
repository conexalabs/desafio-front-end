import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import Infor from '../components/infor'
import axios from 'axios'
import { removeUnderscores } from '../helper/urlCaracter';
class map extends Component {
    
    state = {
        lat: null,
        lng: null,
        empresa: removeUnderscores(this.props.match.params.empresa, false),
        cnpj: this.props.match.params.cnpj,
        endereco: removeUnderscores(this.props.match.params.endereco, false)
    }

    componentDidMount = () => {
        let address = `${this.props.match.params.cidade}+${this.props.match.params.uf}+${this.props.match.params.cep}`
        this.getMarkerMaps(address)     
    }

    getMarkerMaps = async (address) => {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_MAP}`)

         if (response.data.status === 'OK') {
            const state = this.state
            state.lat = response.data.results[0].geometry.location.lat
            state.lng = response.data.results[0].geometry.location.lng
            this.setState(state)
        }else{
            new Error('Couldnt\'t find the location ' + address)
        }
    }

    render() {
        return (
            <div className="map-all">
                <Infor 
                    empresa={this.state.empresa}
                    cnpj={this.state.cnpj}
                    endereco={this.state.endereco} />
                <div>
                    <Map
                        google={this.props.google}
                        style={{ position: 'relative', width: '100%', height: '100vh' }}
                        initialCenter={{ lat: -16.6862468, lng: -49.2759294 }}
                        zoom={12}
                    >
                        <Marker position={{ lat: this.state.lat, lng: this.state.lng }} />
                    </Map>
                </div>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP
})(map);