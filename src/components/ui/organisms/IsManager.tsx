'use client'
import { MyCompanyDocument } from '@/components/network/gql/generated'
import { BaseComponent } from '@/utils/types'
import { useQuery } from '@apollo/client'
import { LoaderPanel } from '../molecules/Loader'
import { AlertSection } from '../molecules/AlertSection'
import { CreateCompany } from './CreateCompany'
import { ReactNode } from 'react'

type RenderPropChild = (id: number) => ReactNode

/**
 * This component checks if the user has a company and renders the provided
 * children component with the company's id as a prop. If the user does not have a
 * company, it renders a message asking them to create one.
 *
 * @param {Object} props - The props to be passed to the component.
 * @param {RenderPropChild | ReactNode} props.children - The component to be rendered
 *         when the user has a company. This component will receive the company's id as a prop.
 */
export const IsManager = ({
  children,
}: {
  children: RenderPropChild | ReactNode
}) => {
  /**
   * This hook runs the `MyCompany` query to get the user's company.
   */
  const { data, loading } = useQuery(MyCompanyDocument)

  if (loading) {
    /**
     * If the query is loading, render a loader panel.
     */
    return <LoaderPanel text="Loading company..." />
  }

  if (!data?.myCompany) {
    /**
     * If the user does not have a company, render an alert section asking them to create one.
     */
    return (
      <AlertSection>
        <div>You don&apos;t have a company yet.</div>
        <CreateCompany />
      </AlertSection>
    )
  }

  /**
   * If the user has a company, render the children component with the company's id as a prop.
   */
  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(data.myCompany.id)
        : children}
    </>
  )
}
