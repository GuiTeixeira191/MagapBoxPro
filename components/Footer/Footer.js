import React from 'react'
import style from './Footer.module.css'
import Image from 'next/image';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.logo}>
                <Image src='/logo_magap.png' width={100} height={100} alt="Logo" />
            </div>
            <div className={style.footer_container}>

                <div className={style.media_container}>
                    <a href="https://www.linkedin.com/">
                    <div className={style.media_l} >Linkedin&nbsp;<BsLinkedin/></div>
                    </a>
                </div>

                <div className={style.media_container}>
                    <a href="https://www.youtube.com/">
                    <div className={style.media_y}>Youtube&nbsp; <BsYoutube/></div>
                    </a>
                </div>

                <div className={style.media_container}>
                    <a href="https://instagram.com/">
                    <div className={style.media_i}>Instagram&nbsp;<BsInstagram /></div>
                    </a>
                </div>

                <div className={style.media_container}>
                    <a href="https://www.facebook.com/">
                    <div className={style.media_f}>Facebook&nbsp;<BsFacebook/></div>
                    </a>
                </div>
            </div>
                <div className={style.me}>
                    Projeto desenvolvido por: Guilherme Teixeira
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