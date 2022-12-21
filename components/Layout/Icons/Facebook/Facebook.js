import React from 'react'
import style from './Facebook.module.css'
import { BsFacebook } from "react-icons/bs";

const Facebook = () => {
    return (
        <div className={style.face}>
            <a href="https://www.linkedin.com/">
                Facebook&nbsp;<BsFacebook/>
            </a>
        </div>
    )
}

export default Facebook