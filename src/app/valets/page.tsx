import { IsLoggedIn } from '@/components/ui/organisms/IsLoggedIn'
import { ManageValets } from '@/components/ui/templates/ManageValets'

export default function Page() {
  return (
    <IsLoggedIn>
      <ManageValets />
    </IsLoggedIn>
  )
}
