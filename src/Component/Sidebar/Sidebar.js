import { Avatar } from '@material-ui/core'
import React from 'react'

import SocailOption from './SidebarOption/SocailOption'
import SidebarOption from './SidebarOption/SidebarOption'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile">
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
            <div className="sidebar__links">
                <SidebarOption Icon={HomeOutlinedIcon} text="Home" url="home" />
                <SidebarOption Icon={PersonOutlineOutlinedIcon} text="About" url="about" />
                <SidebarOption Icon={InsertDriveFileOutlinedIcon} text="Resume" url="resume" />
                <SidebarOption Icon={MenuBookOutlinedIcon} text="Portfolio" url="portfolio" />
                <SidebarOption Icon={LocalLibraryOutlinedIcon} text="Education" url="education" />
                <SidebarOption Icon={MailOutlineOutlinedIcon} text="Contact" url="contact" />
            </div>

            <footer className="footer">
                <p>Made By Shahab Athar</p>
            </footer>
        </div>
    )
}

export default Sidebar
