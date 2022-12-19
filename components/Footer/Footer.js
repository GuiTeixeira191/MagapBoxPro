import React from 'react'
import style from './Footer.module.css'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer_container}>
                <div className={style.media_container}>
                    <a href="https://www.linkedin.com/">
                    <div className={style.media} >Linkedin&nbsp;<BsLinkedin/></div>
                    </a>
                </div>

                <div className={style.media_container}>
                    <a href="https://www.youtube.com/">
                    <div className={style.media}>Youtube&nbsp; <BsYoutube/></div>
                    </a>
                </div>

                <div className={style.media_container}>
                    <a href="https://instagram.com/">
                    <div className={style.media}>Instagram&nbsp;<BsInstagram /></div>
                    </a>
                </div>

                <div className={style.media_container}>
                    <a href="https://www.facebook.com/">
                    <div className={style.media}>Facebook&nbsp;<BsFacebook/></div>
                    </a>
                </div>
            </div>
                <div className={style.me}>
                    Projeto desenvolvido por: Guilherme Teixeira /&nbsp;
                    <a  href= 'https://github.com/GuiTeixeira191' >
                    <BsGithub/>&nbsp;<BsLinkedin/>&nbsp;<BsFacebook/>
                    </a>
                </div>
                <small className='container'>
                    <p> &copy; All Rights Reserved</p>
                </small>
            
        </div>
    )
}

export default Footer