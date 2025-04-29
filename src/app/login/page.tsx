import styles from '../../styles/Login.module.css'
import Image from 'next/image'

export default function Login(){
    return(
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <form action="">
                    <div className={styles.inputGroup}>
                        <input type="email" name="email" required placeholder=" " />
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="password" name="senha" required placeholder=" " />
                        <label htmlFor="senha">Senha</label>
                    </div>
                </form>
            </div>
            <div>
                <button className={styles.buttonLogin}>Login</button>
            </div>

            <div className={styles.crowLogo}>
                <Image
                src="/minilogo.svg"
                alt="Logo Crow"
                width={30}
                height={30}
                />
            </div>

            <div className={styles.copy}><p>© 2025 by Crow. Todos os direitos reservados</p></div>
        </div>
    )
}