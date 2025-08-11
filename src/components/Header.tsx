'use client'

import Image from "next/image"
import styles from '../styles/Header.module.css'
import Link from "next/link"
import { use, useState } from "react"

export function Header(){
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
            <header className={styles.header}>
                <div>
                    <Image src={"./logo.svg"} alt="Logo Flowz" width={120} height={100}/>
                </div>
                <div>
                    <ul className={styles.navList}>
                        <li><Link href={''}>Planos</Link></li>
                        <li><Link href={''}>Sobre</Link></li>
                        <li><Link href={''}>Suporte</Link></li>
                    </ul>
                </div>

                <div className={styles.navButtons}>
                    <Link prefetch href={'/register'}><button>Criar Conta</button></Link>
                    <Link prefetch href={'/login'}><button>Entrar</button></Link>
                </div>


                <div className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`${styles.line1} ${menuOpen ? styles.open1 : ''}`}></div>
                    <div className={`${styles.line2} ${menuOpen ? styles.open2 : ''}`}></div>
                    <div className={`${styles.line3} ${menuOpen ? styles.close : ''}`}></div>
                </div>

                

                <div className={`${styles.headerMenu} ${menuOpen ? styles.showMenu : ''}`}>
                    <ul className={styles.mobileList}>
                        <li><Link href={''}>Planos</Link></li>
                        <li><Link href={''}>Sobre</Link></li>
                        <li><Link href={''}>Suporte</Link></li>
                    </ul>

                    <div className={styles.mobileButtons}>
                        <button>Criar Conta</button>
                        <button>Entrar</button>
                    </div>
                </div>
            </header>
        </>
    )
}