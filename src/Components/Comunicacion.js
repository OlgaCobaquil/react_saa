import React from 'react';

class Comunicacion extends React.Component{
    render(){
        return(
            <div className={"col s12 m6 14"}>
                <div className={"card blue-grey darken-1"}>
                    <div className={"card-content white-text"}>
                        <span className={"card-title"}>
                            contentEditable
                            name = "title"
                            onBlur={ (event) => this.props.updateTitle(event, this.props.id) }>
                            { this.props.title }
                        </span>
                        
                    </div>
                </div>
            </div>
        )
    }

}