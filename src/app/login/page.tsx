import { LoginForm } from '@/components/ui/templates/LoginForm'
import { AuthLayout } from '@/components/ui/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Login'}>
      <LoginForm />
    </AuthLayout>
  )
}
