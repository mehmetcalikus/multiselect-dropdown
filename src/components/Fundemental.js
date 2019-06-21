import React, { Component } from 'react'
import City from './City'
class Fundemental extends Component {
constructor(props){
super(props)
this.state={    
    eleman:"",
    control: false
}

//binding işlemleri arrow function ile yapıldı...
this.updateEleman= this.updateEleman.bind(this)
this.clickControl= this.clickControl.bind(this)

}
updateEleman (newValue){
    this.setState({eleman:newValue})
}

clickControl (){
this.state.control === false
?this.setState({control:true})
:this.setState({control:false})
}



    render() {
        return (
            <div>
                <button onClick={this.clickControl}>onClick{this.state.eleman}</button>
                {
                this.state.control === true
                ?< City
              //  eleman={this.state.eleman}
                setEleman={this.updateEleman}
                clickControl={this.clickControl}
                />
                :null   
                }    
            </div>
        )
    }
}
export default Fundemental;