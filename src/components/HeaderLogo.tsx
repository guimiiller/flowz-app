import styles from '../styles/HeaderLogo.module.css'
import Image from 'next/image'

export function HeaderLogo(){
    return(
        <header className={styles.container}>
            <div className={styles.navIcon}><Image src={'./navicon.svg'} alt='' width={35} height={35} /></div>
            <div><Image src={'./logo.svg'} alt='' width={134} height={134} /></div>
            <div className={styles.profile}></div>
        </header>
    )
}