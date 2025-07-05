'use client'
//Eger cachede data varsa derhal onu gosterir. swr
//data, error, isLoading var elve olraq swrde
// Bu hem fast loadingi, hemde dinamic datani temin edir.
import useSWR from 'swr'
import { useParams, useRouter } from 'next/navigation'

const fetcher = url => fetch(url).then(res => res.json())

export default function ProductDetail() {
  const { id } = useParams()
  const route = useRouter();
  const { data, error, isLoading } = useSWR(
    id ? `/api/products/${id}` : null,
    fetcher
  )

  if (error) return <p>Error Occurred</p>
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>Not Found</p>

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace',fontSize:'30px' }}>
      <h1>{data.name}</h1>
      <p>{data.desc}</p>
      <p>Price: ${data.price}</p>
      <button style={{padding:'1px 4px',backgroundColor:"aqua",borderRadius:'4px',cursor:'pointer'}} onClick={route.back}>Main</button>
    </div>
  )
}
