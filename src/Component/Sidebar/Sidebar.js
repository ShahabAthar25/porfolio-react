import { Avatar } from '@material-ui/core'
import React from 'react'

import SocailOption from './SidebarOption/SocailOption'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile">
                {/* <img className="sidebar__profilePic" src="" alt="" /> */}
                <Avatar className="sidebar__profilePic" />
                <div className="info">
                    <h1>Shahab Athar</h1>
                </div>
                <div className="sidebar__icon">
                    <SocailOption url={'#'} Icon={TwitterIcon} />
                    <SocailOption url={'#'} Icon={LinkedInIcon} />
                    <SocailOption url={'#'} Icon={GitHubIcon} />
                    <SocailOption url={'#'} Icon={EmailIcon} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
