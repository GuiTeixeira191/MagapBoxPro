import React from 'react'
import style from './Linkedin.module.css'
import { BsLinkedin } from "react-icons/bs";

const Linkedin = () => {
    return (
        <div className={style.link}>
            <a href="https://www.linkedin.com/">
                Linkedin&nbsp;<BsLinkedin/>
            </a>
        </div>
    )
}

export default Linkedin

