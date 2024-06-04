'use client'
import { IsLoggedIn } from '@/components/ui/organisms/IsLoggedIn'
import { IsValet } from '@/components/ui/organisms/IsValet'
import { ValetTrips } from '@/components/ui/templates/ValetTrips'

export default function Page() {
  return (
    <main>
      <IsLoggedIn>
        {(uid) => (
          <IsValet uid={uid}>
            <ValetTrips uid={uid} />
          </IsValet>
        )}
      </IsLoggedIn>
    </main>
  )
}
