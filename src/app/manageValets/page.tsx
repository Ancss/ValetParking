import { ManageValets } from '@/components/ui/templates/ManageValets'
import { IsLoggedIn } from '@/components/ui/organisms/IsLoggedIn'

export default function Page() {
  return (
    <IsLoggedIn>
      <ManageValets />
    </IsLoggedIn>
  )
}
