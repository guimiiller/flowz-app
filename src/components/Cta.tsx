import Link from 'next/link'
import styles from '../styles/Cta.module.css'
import { Button } from './Button'
import Image from 'next/image'

export function Cta(){
    return(
        <>
            <section className={styles.ctaContainer}>
                <div className={styles.ctaContent}>
                    <h1>Pronto para automatizar seu Atendimento?</h1>
                    <h3>Comece sua jornada com <span className={styles.purple}>FLOWZ</span> hoje mesmo e experimente a eficiência da automação.</h3>
                    <Button />
                </div>
            </section>
            

            <footer className={styles.footer}>
                <div className={styles.footerPrivacy}>
                    <Link href={''} target='blank'>Política de Privacidade</Link>
                </div>
                <div className={styles.footerInstagram}>
                    <Image src={'./instagram.svg'} alt='Instagram Icon' width={25} height={25}/>
                </div>
            </footer>
        </>
    )
}