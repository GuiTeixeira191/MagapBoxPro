import React from 'react'
import style from './Youtube.module.css'
import { BsYoutube } from "react-icons/bs";

const Youtube = () => {
    return (
        <div className={style.youtube}>
            <a href="https://www.youtube.com/">
                Youtube&nbsp;<BsYoutube/>
            </a>
        </div>
    )
}

export default Youtube