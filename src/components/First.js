import React, { Component } from 'react'
import OptionItem from './OptionItem'
import Search from './Search'
class First extends Component {
constructor(props){
    super(props)
    this.state = {
        Cities:[
            {
                "name":"İstanbul"
            },
            {
                "name":"Ankara"
            },
            {
                "name":"İzmir"
            },
            {
                "name":"Adana"
            }
        ],
        isVisible:false,
        isSelected:false
    }
}




    render() {


        return (
            <div className="App">
             <Search    data={this.state.Cities}/> 
            <li>
            {
            this.state.Cities.map((item,index) =>(
                <OptionItem name = {item.name} />
            ))
            }   
            </li>     
            </div>
        )
        
    }
}
export default First