import { RegisterForm } from '@/components/ui/templates/RegisterForm'
import { AuthLayout } from '@/components/ui/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  )
}
