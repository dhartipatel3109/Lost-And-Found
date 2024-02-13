import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import logo from "./img1.jpg";

function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Lost-And-Found</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <DarkModeOutlinedIcon />
                    </div>
                    <img src={logo} alt=" " className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;