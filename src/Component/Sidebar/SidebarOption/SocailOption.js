import React from 'react'

import "./SocailOption.css"

function SocailOption({ url, Icon }) {
    return (
        <a href={url} className="socailOption">
            <Icon className="socailOption__icon" />
        </a>
    )
}

export default SocailOption
