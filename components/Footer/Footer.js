import React from 'react'
import Facebook from '../Layout/Icons/Facebook/Facebook';
import Instagran from '../Layout/Icons/Instagran/Instagran';
import Linkedin from '../Layout/Icons/Linkedin/Linkedin';
import Youtube from '../Layout/Icons/Youtube/Youtube'
import style from './Footer.module.css'
import Image from 'next/image';
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.logo}>
                <Image src='/logo_magap.png' width={100} height={100} alt="Logo" />
            </div>
            <div className={style.ul}>
                <li className={style.li}>
                    <Linkedin/>
                </li>
                <li className={style.li}>
                    <Youtube/>
                </li>
                <li className={style.li}>
                    <Instagran/>
                </li>
                <li className={style.li}>
                    <Facebook/>
                </li>
            </div>
                <div className={style.me}>
                    Projeto desenvolvido por: Guilherme Teixeira &nbsp;
                    <a  href= 'https://github.com/GuiTeixeira191' >
                        <BsGithub/> &nbsp; <BsLinkedin/> &nbsp; <BsFacebook/>
                    </a> 
                    <small className={style.small}>
                        <p> &copy; All Rights Reserved</p>
                    </small>
                </div>   
        </div>
    )
}

export default Footer