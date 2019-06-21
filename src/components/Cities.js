import React, { Component } from 'react'

class Cities extends Component {
    constructor(props){
        super(props)   
        this.state = {
            tempValue: "il seçiniz",
            cities: ["İstanbul","Ankara","İzmir",150,250,350],
            isSelected:false
        }
    }

    click = (event) =>{
        this.setState({
           tempValue:event.target.value,   
            isSelected : true
        })
        
    }   

    render() {
        const elementList = this.state.cities.map((element,index) =>
        <li className="element-list" key={index} onClick={this.click} value ={element}> {element}</li>
        )
        return (
            <div className="top-part">
                <input
                className= "text"
                onchange={this.click}
                value = {this.state.tempValue}
                />
                
                <ul className="liste">
                   {elementList}
                </ul>  
                
            </div>
        )
    }
}
export default Cities
// {this.state.isSelected ? <Ilce city={this.state.tempValue}/> : null}  
// ilce componentine seçili şehiri gönderiyor...