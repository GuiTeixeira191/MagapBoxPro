import React from 'react'
import style from './Instagran.module.css'
import { BsInstagram } from "react-icons/bs";

const Instagran = () => {
    return (
        <div className={style.insta}>
            <a href="https://www.linkedin.com/">
                Instagran&nbsp;<BsInstagram/>
            </a>
        </div>
    )
}

export default Instagran