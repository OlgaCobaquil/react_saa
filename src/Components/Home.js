import React from 'react';
import './Home.css';
import inicio from '../Images/Inicio.PNG';

var tamanio = {
    width: "100%",
    height: "80%",
};

class Home extends React.Component{
    render(){
        return (
            <div className={Home}>
                <h1 class="hometitle">Sistema de información interno SAA</h1>

            </div>

        )
    }
}
export default Home;