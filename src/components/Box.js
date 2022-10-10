import React, { Component } from 'react'

import "../styles/global.css"

class Step extends Component {
    render() {
        const { color, icon, min, max, value, unit, onChange } = this.props
        const waterColor = icon === "local_drink"
        const percentage = (value - 1.5) / 0.0125

        return (
            <div className='box col-sm-3 col-6' style={{
                background: waterColor && `linear-gradient(0deg, rgba(0,69,255,1) ${percentage}%, rgba(170, 170, 170, 1) 100%)`
                }}
            >
                <span className="material-icons" style={{fontSize: "100px", color: `${color}`}}>{icon}</span>
                <p>{value}{unit}</p>
                {!waterColor && <input 
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={onChange}
                    step={icon === "direction_walk" ? 1000 : 1}
                />}
            </div>
        )
    }
}

export default Step