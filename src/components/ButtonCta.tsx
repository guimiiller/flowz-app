import Link from "next/link"
import styles from '../styles/ButtonCta.module.css'

export function ButtonCta(){
    return(
        <>
            <Link className={styles.btnCta} href={''} >Comece agora</Link>
        </>
    )
}