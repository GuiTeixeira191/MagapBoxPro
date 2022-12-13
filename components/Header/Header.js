import React from "react";
import styles from "./Header.module.css"
import Link from "next/Link"

const Header = () => {
    return (
        <div className={styles.menu_container}>
            <div className={styles.nav}>
                <div className={styles.ul}>
                    
                    <div className={styles.li}>
                        <Link href="/">

                            Home

                        </Link>
                    </div>

                    <div className={styles.li}>
                        <Link href="/">

                                Clientes

                        </Link>
                    </div>
                    <div className={styles.li}>
                        <Link href="/Brinquedos">

                                Contato

                        </Link>
                    </div> 
                    <div className={styles.li}>
                        <Link href="/">

                                Pesquisa

                        </Link>
                    </div>
                    <div className={styles.li}>
                        <Link href="/">

                                Sobre nós

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header