import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// components
import { Header } from "@/components/Header";
import { ButtonCta } from "@/components/ButtonCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.content}>
          <h1>Automatize suas conversas no WhatsApp agora mesmo.</h1>
          <p> <Image src={'./ballonMessage.svg'} alt="Ballon Message" width={25} height={25} /> Crie respostas automáticas, atenda mais clientes e ganhe tempo.</p>
          <ButtonCta />
        </div>
        <Image className={styles.logoCrow} src={'./logoCrow.svg'} alt="Logo Crow" width={30} height={30}/>
        <p className={styles.crowCopy}>© 2025 by Crow. Todos os direitos reservados</p>
      </main>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>Automação inteligente para atender melhor e vender mais</h2>
              <div className={styles.aboutParagraphs}>
                <p>No Flowz, você transforma conversas em oportunidades. Automatize respostas no WhatsApp, agilize o atendimento e nunca mais perca um cliente por demora ou falta de resposta.</p>
                <p>Com nosso painel simples e intuitivo, você cria mensagens automáticas, gerencia seu fluxo de atendimento e mantém tudo sob controle mesmo fora do horário comercial.</p>
                <p>Além disso, o Flowz ajuda a profissionalizar sua comunicação, melhorar a experiência do cliente e aumentar a conversão sem precisar contratar mais equipe.</p>
              </div>
              <ButtonCta />
            </div>
            <div className={styles.aboutImage}>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <div>
            <Image src={'./benefit1.svg'} alt="Icon benefit1" width={45} height={45}/>
            <h3>Respostas automáticas para suas dúvidas mais comuns</h3>
            <p>O Flowz responde instantaneamente as perguntas que seus clientes fazem todo dia.</p>
          </div>
          <div>
            <Image src={'./benefit2.svg'} alt="Icon benefit2" width={45} height={45}/>
            <h3>Conversa no WhatsApp funcionando 24 horas</h3>
            <p>Mesmo fora do horário, seu atendimento não para.</p>
          </div>
          <div>
            <Image src={'./benefit3.svg'} alt="Icon benefit3" width={45} height={45}/>
            <h3>Painel fácil de usar, sem complicação</h3>
            <p>Tudo organizado para você controlar sem stress.</p>
          </div>
          <div>
            <Image src={'./benefit4.svg'} alt="Icon benefit4" width={45} height={45}/>
            <h3>Ligue e desligue o atendimento automático quando quiser</h3>
            <p>Você decide quando o Flowz deve responder ou quando você quer atender pessoalmente.</p>
          </div>
          <div>
            <Image src={'./benefit5.svg'} alt="Icon benefit5" width={45} height={45}/>
            <h3>Sua equipe pode usar o sistema junto com você</h3>
            <p>Várias pessoas conseguem ajudar e acompanhar as conversas.</p>
          </div>
          <div>
            <Image src={'./benefit6.svg'} alt="Icon benefit6" width={45} height={45}/>
            <h3>Histórico de mensagens para você conferir sempre que precisar</h3>
            <p>Veja tudo o que já foi conversado para não perder nada importante.</p>
          </div>
        </div>
      </section>

      <section className={styles.planSection}>
        <div className={styles.planContainer}>
          <div className={styles.plan}>
            <div className={styles.planContent}>
              <h3>Plano Gratuito</h3>
              <h2>Gratuito</h2>
              <div className={styles.line}></div>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing </p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div>
              <Link href={''} className={styles.linkPlan}>Começar agora</Link>
            </div>
          </div>
          <div className={styles.plan}>
            <div className={styles.planContent}>
              <h3>Segundo Plano</h3>
              <h2>$9.99/m</h2>
              <div className={styles.line}></div>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div>
              <Link href={''} className={styles.linkPlan}>Começar agora</Link>
            </div>
          </div>
          <div className={styles.plan}>
            <div className={styles.planContent}>
              <h3>Terceiro Plano</h3>
              <h2>$19.99/m</h2>
              <div className={styles.line}></div>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
              <p><Image src={'/checkIcon.svg'} alt="Icon Check" width={30} height={30}/> Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div>
              <Link href={''} className={styles.linkPlan}>Começar agora</Link>
            </div>
          </div>  
        </div>
      </section>
    </>
  );
}
