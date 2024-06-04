import { IsLoggedIn } from '@/components/ui/organisms/IsLoggedIn'
import { IsManager } from '@/components/ui/organisms/IsManager'
import { ListGarageBookings } from '@/components/ui/templates/ListGarageBookings'

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const garageId = Number(searchParams['garageId'])

  return (
    <main>
      <IsLoggedIn>
        <IsManager>
          <ListGarageBookings garageId={garageId} />
        </IsManager>
      </IsLoggedIn>
    </main>
  )
}
