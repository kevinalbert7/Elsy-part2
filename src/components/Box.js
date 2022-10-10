import React, { Component } from 'react'

import "../styles/global.css"

class Step extends Component {
    render() {
        return (
            <div className='box col-sm-3 col-6'>
                <span className="material-icons" style={{fontSize: "100px", color: `${this.props.color}`}}>{this.props.icon}</span>
                <p>{this.props.value}{this.props.unit}</p>
                {this.props.icon !== "local_drink" && <input 
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />}
            </div>
        )
    }
}

export default Step