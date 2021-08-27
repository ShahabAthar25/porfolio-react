import React from 'react'

import './SidebarOption.css'

function SidebarOption({ Icon, text, url }) {
    return (
        <a className="sidebarOption" href={`#${url}`}>
            <Icon className="sidebarOption__icon" />
            <p>{text}</p>
        </a>
    )
}

export default SidebarOption
