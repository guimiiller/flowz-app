'use client'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function RedirectHandler() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.user?.id) {
      router.push(`/dashboard/${session.user.id}`)
    } else {
      router.push('/dashboard')
    }
  }, [session, router])

  return <p>Redirecionando...</p>
}
