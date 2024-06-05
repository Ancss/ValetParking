'use client'
import { BaseComponent, MenuItem, Role } from '@/utils/types'
import { Brand } from '../atoms/Brand'
import { Container } from '../atoms/Container'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Sidebar } from './Sidebar'
import { UserInfo } from '../molecules/UserInfo'
import { LogoutButton } from '../molecules/LogoutButton'
import { Button } from '../atoms/Button'
import { useDialogState } from '@/utils/hooks/dialog'
import { NavSidebar } from './NavSidebar'
import { Menus } from './Menus'
import { useQuery } from '@apollo/client'
import {
  AdminMeDocument,
  MyCompanyDocument,
  ValetMeDocument,
} from '@/components/network/gql/generated'
import { useEffect, useState } from 'react'

export type IHeaderProps = {
  type?: Role
  // menuItems: MenuItem[]
} & BaseComponent

export const Header = ({ type }: IHeaderProps) => {
  const session = useSession()
  const uid = session?.data?.user?.uid
  let [open, setOpen] = useDialogState(false)
  const { data: myCompany } = useQuery(MyCompanyDocument)
  const { data: admin } = useQuery(AdminMeDocument)
  const { data: valetMe } = useQuery(ValetMeDocument)
  const [menuItems, setMenuItem] = useState<MenuItem[]>([
    { label: 'Search', href: '/search' },
    { label: 'Bookings', href: '/listCustomerBookings' },
  ])

  useEffect(() => {
    if (admin?.adminMe?.uid) {
      setMenuItem((prevMenuItems) => {
        return [
          ...prevMenuItems,
          { label: 'Garages', href: '/' },
          { label: 'Admins', href: '/manageAdmins' },
        ]
      })
    }
  }, [admin])

  useEffect(() => {
    if (myCompany?.myCompany) {
      setMenuItem((prevMenuItems) => {
        return [
          ...prevMenuItems,
          { label: 'New Garage', href: '/new-garage' },
          { label: 'Valets', href: '/valets' },
        ]
      })
    }
  }, [myCompany])

  useEffect(() => {
    if (valetMe?.valetMe?.uid) {
      setMenuItem((prevMenuItems) => {
        return [...prevMenuItems, { label: 'My Trips', href: '/my-trips' }]
      })
    }
  }, [valetMe])

  return (
    <header>
      <nav className="fixed z-40 top-0 w-full shadow-md bg-white/50 backdrop-blur-md">
        <Container className="relative   flex items-center justify-between h-16 py-2 gap-16">
          <Link href="/" aria-label="Home" className="w-auto z-50">
            <Brand type={type} className="hidden h-10 sm:block" />
            <Brand type={type} shortForm className="block sm:hidden" />
          </Link>
          <div className="flex items-center gap-2">
            {uid ? (
              <div className="flex gap-6 items-center">
                <div className="text-sm mr-6 flex gap-3">
                  <Menus menuItems={menuItems} />
                </div>

                <NavSidebar menuItems={menuItems} />
              </div>
            ) : (
              <>
                <Link href="/register">
                  <Button variant="outlined" className="hidden md:block">
                    Register
                  </Button>
                </Link>
                <Link href="/login">
                  <Button>Log in</Button>
                </Link>
              </>
            )}
          </div>
        </Container>
      </nav>
      <div className="h-16" />
    </header>
  )
}
