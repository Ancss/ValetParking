'use client'
import { SearchPage } from '@/components/ui/templates/SearchPage'
import { FormProviderSearchGarage } from '@/components/forms/searchGarages'

export default function Page() {
  return (
    <FormProviderSearchGarage>
      <SearchPage />
    </FormProviderSearchGarage>
  )
}
