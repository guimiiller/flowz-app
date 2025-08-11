'use client'

import { useEffect, useState } from 'react'
import { getSession, signOut } from 'next-auth/react'
import styles from '../styles/Dashboard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AsideNav } from './AsideNav'

export default function DashboardClient() {
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    const fetchUserName = async () => {
      const session = await getSession()
      if (session?.user?.name) setUserName(session.user.name)
    }
    fetchUserName()
  }, [])

  return (
    <>
      <header className={styles.header}>
        <div>
          <Image src={'/logo.svg'} alt='Logo' width={150} height={30} />
        </div>
        <div>
          <button className={styles.outButton} onClick={() => signOut({ callbackUrl: '/login' })}>
            <Image src={'/signOut.svg'} alt='Sign Out Icon' width={30} height={30} />
          </button>
        </div>
      </header>
      <main className={styles.container}>

        <AsideNav />

        <div className={styles.dashboardContent}>
          <div>
            <h1>Hello {userName || 'usuário'}</h1>
          </div>

          <div>
            <div>
              <p>Bem-vindo ao seu dashboard!</p>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}
