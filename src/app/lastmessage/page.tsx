import { HeaderLogo } from "@/components/HeaderLogo"
import Image from "next/image"
import styles from '../../styles/LastMessage.module.css'

export default function LastMessages(){
    return(
        <>
            <HeaderLogo />
            <section className={styles.container}>
                <div className={styles.lastContactContainer}>
                    <div className={styles.lastContactIcons}>
                        <div><Image src={'./search.svg'} alt="Search Icon" width={25} height={25}/></div>
                        <div><Image src={'./filter.svg'} alt="Filter Icon" width={25} height={25}/></div>
                    </div>
                    <div className={styles.contactsContainer}>
                        <div className={styles.contactsContent}>
                            <div><h3>Contacts</h3></div>
                            <div className={styles.lastContactsContainer}>
                                <div className={styles.contactProfile}>
                                    <div className={styles.lastContact}></div>
                                    <div><div><h4>Name</h4></div><div><p>(11) 99999-9999</p></div></div>
                                </div>
                                <div className={styles.contactDate}>
                                    <p>21 may, 09:29 am</p>
                                </div>
                            </div>
                            <div className={styles.line}></div>
                        </div>
                        <div><button>More Contacts <Image src={'./morebuttonicon.svg'} alt="More Icon" width={20} height={20}/> </button></div>
                    </div>
                    <div className={styles.lastMessagesContainer}>
                        <div><h3>Last Messages</h3></div>
                        <div className={styles.lastMessagesBox}>
                            <div className={styles.boxLastMessage}>
                                <div className={styles.boxInfo1}>
                                    <div className={styles.lastProfile}></div>
                                    <div><Image src={'./read.svg'} alt="Read Icon" width={25} height={25}/></div>
                                </div>
                                <div className={styles.boxInfo2}>
                                    <h5>Lorem Ipsum é simplesmente uma simulação de</h5>
                                    <p>21 may, 09:20 am</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}