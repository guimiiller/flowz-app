import Image from "next/image"
import styles from '../styles/Benefits.module.css'

export function Benefits(){
    return(
        <section className={styles.benefitsContainer}>
            <div className={styles.benefitsContent}>
                <div className={styles.benefits1}>
                    <div>
                        <div><Image src={'./bot.svg'} alt="Bot Icon" width={40} height={40}/></div>
                        <div><h3>Automação de Atendimento</h3></div>
                        <div><p>Lorem Ipsum é simplesmente uma simulação </p></div>
                    </div>
                    <div>
                        <div><Image src={'./conversations.svg'} alt="Conversations Icon" width={40} height={40}/></div>
                        <div><h3>Gerenciamento de Conversas</h3></div>
                        <div><p>Lorem Ipsum é simplesmente uma simulação </p></div>
                    </div>
                    <div>
                        <div><Image src={'./integration.svg'} alt="Integration Icon" width={40} height={40}/></div>
                        <div><h3>Integração com CRM</h3></div>
                        <div><p>Lorem Ipsum é simplesmente uma simulação </p></div>
                    </div>
                </div>
                <div className={styles.benefits2}>
                    <div>
                        <div><Image src={'./headphones.svg'} alt="Headphones Icon" width={40} height={40}/></div>
                        <div><h3>Suporte 24/7</h3></div>
                        <div><p>Lorem Ipsum é simplesmente uma simulação </p></div>
                    </div>
                    <div>
                        <div><Image src={'./edit.svg'} alt="Edit Icon" width={40} height={40}/></div>
                        <div><h3>Personalização de Mensagens</h3></div>
                        <div><p>Lorem Ipsum é simplesmente uma simulação </p></div>
                    </div>
                    <div>
                        <div><Image src={'./reports.svg'} alt="Reports Icon" width={40} height={40}/></div>
                        <div><h3>Análises e Relatórios Avançados</h3></div>
                        <div><p>Lorem Ipsum é simplesmente uma simulação </p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}