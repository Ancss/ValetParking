'use client'
import { IsLoggedIn } from '@/components/ui/organisms/IsLoggedIn'
import { IsManager } from '@/components/ui/organisms/IsManager'
import { ListGarages } from '@/components/ui/organisms/ListGarages'
export default function Home() {
  return (
    <IsLoggedIn>
      <IsManager>
        {(companyId) => <ListGarages companyId={companyId} />}
      </IsManager>
    </IsLoggedIn>
  )
}
