import React from 'react'
import Image from 'next/image'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
    return (
        <div>
            <div>
                <a href="https://www.linkedin.com/">
                <BsLinkedin/>
                </a>

                <a href="https://www.youtube.com/">
                <BsYoutube/>
                </a>

                <a href="https://instagram.com/">
                <BsInstagram />
                </a>
            </div>

            <div>
                Projeto desenvolvido por: Guilherme Teixeira / {}
                <a  href= 'https://github.com/GuiTeixeira191' >
                <BsGithub />
                </a>
            </div>
            <small className='container'>
                <p> &copy; All Rights Reserved</p>
            </small>
        </div>
    )
}

export default Footer