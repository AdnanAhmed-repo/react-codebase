import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";



export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Configure',
        path: '/dashconfig',
        icon: <BsIcons.BsGearWideConnected />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/dashprofile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title: 'FAQS',
        path: '/dashfaqs',
        icon: <IoIcons.IoIosHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Help',
        path: '/dashhelp',
        icon: <MdIcons.MdLiveHelp />,
        cName: 'nav-text'
    }
]