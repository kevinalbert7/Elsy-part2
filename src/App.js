import React, { Component } from 'react'

import Step from "./components/Box"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000
const initialWater = 1.5

class App extends Component {
  constructor () {
    super ()
    
    this.state = {
      water: initialWater,
      heart: 120,
      temperature: 10,
      steps: 3000,
    }

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepChange = this.onStepChange.bind(this)
    this.onTemperatureChangeChange = this.onTemperatureChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)

  }
  
  onHeartChange(e) {
    this.setState({heart: Number(e.target.value)}, () => {
      this.calculateWater()
    })
  }
  
  onStepChange(e) {
    this.setState({steps: Number(e.target.value)}, () => {
      this.calculateWater()
    })
    this.calculateWater()
  }

  onTemperatureChange(e) {
    this.setState({temperature: Number(e.target.value)}, () => {
      this.calculateWater()
    })
    this.calculateWater()
  }

  calculateWater() {
    const { temperature, heart, steps} = this.state
    const averageTemp = 20
    const averageHeart = 120
    const averageSteps = 10000
    let sum = 0

    if (temperature > averageTemp) {
      const tempDiff = temperature - 20
      sum += tempDiff * 0.02
    }

    if (heart > averageHeart) {
      const heartDiff = heart - 120
      sum += heartDiff * 0.0008
    }

    if (steps > averageSteps) {
      const stepsDiff = steps - 10000
      sum += stepsDiff * 0.00002
    }

    const roundedSum = Number((initialWater + sum).toFixed(2))
    
    this.setState({water: roundedSum})
  }

  render () {
    const { water, steps, heart, temperature } = this.state

    return (
      <div className="container-fluid">
        <div className="row">
          <Step 
            icon="local_drink"
            color="#3A85FF"
            value={water}
            unit="L"
          />
          <Step 
            icon="directions_walk"
            color="black"
            value={steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onChange={(e) => this.onStepChange(e)}
          />
          <Step 
            icon="favorite"
            color="red"
            value={heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onChange={(e) => this.onHeartChange(e)}
          />
          <Step
            icon="wb_sunny"
            color="yellow"
            value={temperature}
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


