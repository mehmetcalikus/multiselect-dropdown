import React, { Component } from 'react'
import Cities from "./Cities"

class City extends Component {
    render() {
        return (
                <div className="buttons">
                    <div className="options">
                        <div className="asd"> <Cities
                            setEleman={this.props.setEleman} />
                        </div>
                    </div>
                </div>    
                    )
                }
            }
export default City;