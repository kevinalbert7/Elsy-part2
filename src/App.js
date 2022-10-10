import React, { Component } from 'react'

import Step from "./components/Box"
// import "./styles/global.css"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends Component {
  constructor () {
    super ()
    
    this.state = {
      water: 0,
      heart: 120,
      temperature: 10,
      steps: 3000,
      waterTotal: 1.5
    }

    this.onHeartChange = this.onHeartChange.bind(this);
    this.calculateWater = this.calculateWater.bind(this);

  }
  
  onHeartChange(e) {
    this.setState({heart: e.target.value})
    this.calculateWater(e.target.value)
  }
  
  onStepChange(e) {
    this.setState({steps: e.target.value})
  }

  onTemperatureChange(e) {
    this.setState({temperature: e.target.value})
  }

  calculateWater() {
    let waterTotal = 1.5

    if (this.state.temp > 20) {
      for (let i = 20; i < tempMax; i ++) {
        waterTotal += 0.02
      }
    }

    if (this.state.heart > 120) {
      for (let i = 120; i < 180; i ++) {
        waterTotal += 0.0008
      }
    }

    if (this.state.steps > 10000) {
      for (let i = 10000; i < 50000; i ++) {
        waterTotal += 0.00002
      }
    }
    console.log("water =>", this.state.water)
    console.log("waterTotal =>", waterTotal)
    return this.setState({water: waterTotal})
  }

  render () {

    return (
      <div className="container-fluid">
        <div className="row">
          <Step 
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            unit="L"
          />
          <Step 
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onChange={(e) => this.onStepChange(e)}
          />
          <Step 
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onChange={(e) => this.onHeartChange(e)}
          />
          <Step
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onChange={(e) => this.onTemperatureChange(e)}
          />
        </div>
      </div>
    )
  }
}

export default App


