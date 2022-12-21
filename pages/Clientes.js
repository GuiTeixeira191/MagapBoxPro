import React from "react";
import Image from "next/image";
import style from '../styles/Clientes.module.css'

const Clientes = () => {
    return (
        <div className={style.client}>
            <div className={style.title}>
                <h1>Alguns dos nossos principais clientes</h1>
            </div>
            <div className={style.image}>
                <Image src='/Jnj_logo.gif' width={150} height={100} alt='Jhonsons'/>
            </div>
        </div>
    )
}

export default Clientes