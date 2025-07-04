'use client'

import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function ProductDetailClient({ id }) {
  const { data, error, isLoading } = useSWR(
    `/api/products/${id}`,
    fetcher
  )

  if (error) return <div>err</div>
  if (isLoading) return <div>Loadding.</div>
  if (!data) return <div>not found</div>

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{data.name}</h1>
      <p>{data.desc}</p>
      <p>Qiymət: ${data.price}</p>
    </div>
  )
}
