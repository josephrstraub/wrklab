import React, { Component } from 'react'
import '../styles/ProgressMeter.css'

const ProgressMeter = ({ processes, activeProcessId, changeActiveProcess }) => {
    let circles = processes.map((process, index) => {
      if (index === 0) {
        return (
          <div key={process._id} style={{display: "inline-block", position: "relative"}}>
            <div
              className={`progress-circle ${process._id === activeProcessId ? "active-process" : null}`}
              onClick={changeActiveProcess.bind(this, process._id)}>
              <div className="inner-circle"></div>
            </div>
            {
              activeProcessId !== process._id ?
                <h4 className="first-num" onClick={changeActiveProcess.bind(this, process._id)}>01</h4>
              :
                null
            }
        </div>
        )
      } else {
        return (
          <div key={index} style={{display: "inline-block", position: "relative"}}>
            <div className="tiny"></div>
            <div className="tiny"></div>
            <div
              className={`progress-circle ${process._id === activeProcessId ? "active-process" : null}`}
              onClick={changeActiveProcess.bind(this, process._id)}>
              <div className="inner-circle"></div>
            </div>
            {activeProcessId !== process._id ? <h4 onClick={changeActiveProcess.bind(this, process._id)}>0{index+1}</h4> : null}
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

export default ProgressMeter
