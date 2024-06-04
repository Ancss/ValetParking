'use client'
import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { LoaderPanel } from '../molecules/Loader'
import { AlertSection } from '../molecules/AlertSection'
import Link from 'next/link'

type RenderPropChild = (uid: string) => ReactNode

/**
 * This component checks if the user is logged in and renders the provided
 * children component with the user's uid as a prop. If the user is not
 * logged in, it renders a message asking them to log in.
 *
 * @param {Object} props - The props to be passed to the component.
 * @param {RenderPropChild | ReactNode} props.children - The component to be rendered
 *         when the user is logged in. This component will receive the user's uid as
 *         a prop.
 * @param {ReactNode} [props.notLoggedIn] - An optional component to be rendered
 *         when the user is not logged in. If not provided, the component will
 *         render a message asking the user to log in.
 */
export const IsLoggedIn = ({
  children,
  notLoggedIn,
}: {
  children: RenderPropChild | ReactNode
  notLoggedIn?: ReactNode
}) => {
  const { status, data } = useSession()

  if (status === 'loading') {
    // Return a loader panel if we are still loading the session
    return <LoaderPanel text="Loading user..." />
  }

  if (!data?.user?.uid) {
    // If the user is not logged in, render the notLoggedIn component if it is
    // provided. Otherwise, render a message asking the user to log in.
    if (notLoggedIn) {
      return <>{notLoggedIn}</>
    } else {
      return (
        <AlertSection title="You are not logged in.">
          <Link href="/login">Login</Link>
        </AlertSection>
      )
    }
  }

  // If the user is logged in, render the children component with the user's uid
  // as a prop.
  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(data.user.uid)
        : children}
    </>
  )
}
