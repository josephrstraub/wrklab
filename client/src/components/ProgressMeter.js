import React, { Component } from 'react'
import '../styles/ProgressMeter.css'

class ProgressMeter extends Component {
  render() {
    let circles = this.props.processes.map((process, index) => {
      if (index === 0) {
        return (
          <div key={index} style={{display: "inline-block", position: "relative"}}>
            <div className={`circle ${index === this.props.activeProcess ? "active-process" : null}`}>
              <div className="inner-circle"></div>
            </div>
            {this.props.activeProcess !== index ? <h4 className="first-num">01</h4> : null}
        </div>
        )
      } else {
        return (
          <div key={index} style={{display: "inline-block", position: "relative"}}>
            <div className="tiny"></div>
            <div className="tiny"></div>
            <div className={`circle ${index === this.props.activeProcess ? "active-process" : null}`}>
              <div className="inner-circle"></div>
            </div>
            {this.props.activeProcess !== index ? <h4>0{index+1}</h4> : null}
          </div>
        )
      }
    })
    return (
      <div className="progress-meter" style={{textAlign: "center"}}>
        {circles}
      </div>
    )
  }
}

export default ProgressMeter
