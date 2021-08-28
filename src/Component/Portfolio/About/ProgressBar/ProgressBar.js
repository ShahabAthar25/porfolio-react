import React from 'react'

import './ProgressBar.css'

function ProgressBar({ pct, text }) {
    return (
        <div className="progress">
            <div className="progress__text">
                <p>{text}</p>
                <p className="float-left">{pct}%</p>
            </div>
            <div className="progressBar-bg">
                <div className="progressBar" style={{ width: `${pct}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar
