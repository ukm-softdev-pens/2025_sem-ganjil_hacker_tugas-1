// src/ProfileCard.jsx
import { Component } from 'react';
import './App.css'

class Profile extends Component {
    
    render() {
        return (
            <div className="border-srounded border-thin border-white background-gray padding-narrow margin-narrow" margin={ "10px" }>
                <img className="border-rounded" src={this.props.image} alt="" width={ "150px" } border-radius={ "999px" } />
                <h5>Hello, {this.props.name} </h5>
                <h5>Asal: {this.props.asal} </h5>
                <h5>Pekerjaan: {this.props.jobs} </h5>
            </div>
            
        );
    }
}

export default function ProfileCard() {
    return (
        <div className="card">
            <Profile 
                name= "Agnes Tachyon"
                asal= "Tracen Academy"
                jobs= "uma"
                image="/src/assets/tachyon.jpeg" />
            <Profile
                name= "Bahlil Anjeng"
                asal= "Neraka"
                jobs= "monyet KBS"
                image="/src/assets/bahlil.jpeg" />
        </div>
    );
}
