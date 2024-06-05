import { signIn } from 'next-auth/react'
import { IconBrandGoogle } from '@tabler/icons-react'
export const GoogleButton = () => {
  return (
    <button
      onClick={() => {
        signIn('google', { callbackUrl: '/' })
      }}
      className="text-lg bg-white text-gray-700 hover:shadow-lg px-4 py-2 transition-shadow flex items-center justify-center h-8 border  rounded-md"
    >
      Connect with Google
    </button>
  )
}
