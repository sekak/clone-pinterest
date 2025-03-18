import React from 'react'
import Gallery from '../../components/gallery/gallery'
import { useSearchParams } from 'react-router'

export default function SearchPage() {

  const [params] = useSearchParams()
  const search = params.get('search')

  return <Gallery search={search}/>
}
