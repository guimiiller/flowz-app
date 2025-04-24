import styles from '../styles/About.module.css'
import Image from 'next/image'
import { Button } from './Button'

export function About(){
    return(
        <section className={styles.about}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutText}>
                    <div>
                        <h2>Por que Escolher <span className={styles.purple}>FLOWZ</span>?</h2>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>

                        <Button isMargin={true} />
                    </div>
                    <div className={styles.checksContainer}>
                        <div>
                            <Image src={'./checkabout.svg'} alt='Check About' width={40} height={40}/>
                            <h4>Automação Multicanal</h4>
                        </div>
                        <div>
                            <Image src={'./checkabout.svg'} alt='Check About' width={40} height={40}/>
                            <h4>Respostas Instantâneas</h4>
                        </div>
                        <div>
                            <Image src={'./checkabout.svg'} alt='Check About' width={40} height={40}/>
                            <h4>Análises Poderosas</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutVideo}></div>
            </div>
        </section>
    )
}