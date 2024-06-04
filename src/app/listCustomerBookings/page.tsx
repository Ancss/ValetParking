import { ListCustomerBookings } from '@/components/ui/templates/ListCustomerBookings'
import { IsLoggedIn } from '@/components/ui/organisms/IsLoggedIn'

export default function Page() {
  return (
    <IsLoggedIn>
      <ListCustomerBookings />
    </IsLoggedIn>
  )
}
