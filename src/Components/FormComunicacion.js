import React from 'react';
class FormComunicacion extends React.Component{
    constructor(){
        super();
        this.state = {title:'', code:'', peticionario:'', fecha:'',tema:'', resumen:''}
    }
    propiedades(event){
        event.preventDefault();
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.setState({[fieldName]: fieldValue})
    }
    //crear un caso
    createComunicacion(event){
        event.preventDefault();
        const caso = {title: this.state.title, code: this.state.code, peticionario: this.state.peticionario}
    }

}