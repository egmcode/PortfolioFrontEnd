import React, {Component} from 'react';
import '../styles/Cards.css';
import Card from './Card';
import { svcApi } from '../componentsSvcs/Api.js';

class Cards extends Component {

    state = {
        dbs: [],
        languages: [],
        other: [],
        wfs: [],
    }

    constructor(props){
        super(props);
        this.getLang();
        this.getDB();
        this.getWF();
        this.getOther();
    }

    async getLang() {
        await svcApi.get('/language/')
        .then(response => {
            this.setState({languages: response.data})
        })
    }

    async getDB() {
        await svcApi.get('/db/')
        .then(response => {
            this.setState({dbs: response.data})
        });
    }

    async getWF() {
        await svcApi.get('/wf/')
        .then(response => {
            this.setState({wfs: response.data})
        })
    }

    async getOther() {
        await svcApi.get('/other/')
        .then(response => {
            this.setState({other: response.data})
        })
    }

    render()
    {
        return(
            <div className="cards-hdg-container" id="skills">
                <div className="cards-container">
                    <div className="grid-item-one cards-item-container">
                        <Card 
                        src='LanguagesCrop.jpg'
                        list={this.state.languages}
                        title="Language Knowledge"/>
                    </div>
                    <div className="grid-item-four cards-item-container">
                        <Card 
                        src='WebFrameworksCrop.jpg'
                        list={this.state.wfs}
                        title="Web Framework Knowledge" />
                    </div>
                    <div className="grid-item-two cards-item-container">
                        <Card 
                        src='StorageCrop.jpg'
                        list={this.state.dbs}
                        title="Storage Knowledge" />
                    </div>
                    <div className="grid-item-three cards-item-container">
                        <Card 
                        src='OtherCrop.jpg'
                        list={this.state.other}
                        title="Other Knowledge" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;