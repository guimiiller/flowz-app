'use client'

import { useState } from "react"
import Image from "next/image"
import styles from '../../styles/NewMessage.module.css'
import { HeaderLogo } from "@/components/HeaderLogo"

export default function NewMessage(){

    return(
        <>
            <HeaderLogo />
            <section className={styles.container}>
                <div className={styles.newMessageButtonContainer}>
                    <button className={styles.newMessageButton}>New Message<Image src={'./newbutton.svg'} alt='' width={22} height={22} /></button>
                </div>
                <div className={styles.newMessageTextContainer}>
                    <div className={styles.iconEdit}><Image src={'./editmessage.svg'} alt='' width={22} height={22} /></div>
                    <div className={styles.newMessage}><h4>Title Message</h4> <p>Lorem Ipsum é simplesmente uma simulação de </p></div>
                </div>
            </section>
        </>
    )
}
