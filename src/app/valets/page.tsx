import { IsLoggedIn } from '@/components/ui/organisms/IsLoggedIn'
import { ManageValets } from '@/components/ui/templates/ManageValets'
import { ValetHome } from '@/components/ui/templates/ValetHome'

export default function Page() {
  return (
    <IsLoggedIn>
      <ValetHome />

      <ManageValets />
    </IsLoggedIn>
  )
}
