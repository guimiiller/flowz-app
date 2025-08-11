import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Dashboard.module.css'


export function AsideNav(){
    return(
        <>
            <aside className={styles.dashboardNav}>
                <div className={styles.dashboardNavLinks}>
                    <Link href="">
                        <div className={styles.tooltip}>
                            <Image src={'/dashboardNavIcon.svg'} alt='Dashboard Icon' width={40} height={40} />
                            <span className={styles.tooltipText}>Dashboard</span>
                        </div>
                    </Link>

                    <Link href="">
                        <div className={styles.tooltip}>
                            <Image src={'/benefit6.svg'} alt='Conversations Icon' width={40} height={40} />
                            <span className={styles.tooltipText}>Conversas</span>
                        </div>
                    </Link>

                    <Link href="">
                        <div className={styles.tooltip}>
                            <Image src={'/benefit1.svg'} alt='Automation Icon' width={40} height={40} />
                            <span className={styles.tooltipText}>Automação</span>
                        </div>
                    </Link>

                    <Link href="">
                        <div className={styles.tooltip}>
                            <Image src={'/conversationsNavIcon.svg'} alt='Response Icon' width={40} height={40} />
                            <span className={styles.tooltipText}>Respostas Rápidas</span>
                        </div>
                    </Link>

                    <Link href="">
                        <div className={styles.tooltip}>
                            <Image src={'/benefit5.svg'} alt='Clients Icon' width={40} height={40} />
                            <span className={styles.tooltipText}>Clientes</span>
                        </div>
                    </Link>
                </div>
            </aside>
        </>
    )
}