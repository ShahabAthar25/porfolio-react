import React from 'react'

import './SidebarOption.css'

function SidebarOption({ Icon, text }) {
    return (
        <div className="sidebarOption">
            <Icon className="sidebarOption__icon" />
            <p>{text}</p>
        </div>
    )
}

export default SidebarOption
