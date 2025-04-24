import { useState } from 'react'
import styles from '../styles/Button.module.css'

type ButtonProps = {
    isMargin?: boolean;
};

export function Button({isMargin = false}: ButtonProps){

    
    return(
        <button className={`${styles.buttonFree} ${isMargin ? styles.withMargin : '' }`}>Teste Grátis</button>
    )
}