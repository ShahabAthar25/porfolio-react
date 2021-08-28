import React from 'react'

import './ProgressBar.css'

function ProgressBar({ pct, text }) {
    return (
        <div className="progress">
            <p>{text}</p>
            <div className="progressBar-bg">
                <div className="progressBar" style={{ width: `${pct}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar
