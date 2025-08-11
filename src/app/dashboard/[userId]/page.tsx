import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import DashboardClient from '@/components/DashboardClient'

interface Props {
  params: {
    id: string
  }
}

export default async function DashboardPage({ params }: Props) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return <DashboardClient />
}
