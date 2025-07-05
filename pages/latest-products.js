import Link from "next/link"
//note bunlarin her birini rahat bir sekilde app/{...}/page.js de yaza bilerdim amma client site render olacaqdi taskinda megzi ondadirki isr ve ssr olsun ona gorede mesbur pages isletdim
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const allProducts = await res.json()

  const latestProducts = allProducts.slice(-5).reverse()

  return {
    props: {
      latestProducts
    },
    revalidate: 60, 
  }
}

export default function LatestProductsPage({ latestProducts }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1 style={{ borderLeft: '4px solid blue', paddingLeft: '10px', marginBottom: '20px' }}>Lastest 5 Products</h1>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {latestProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} style={{
            border: '2px solid lightskyblue',
            textDecoration:'none',
            borderRadius: '8px',
            padding: '16px',
            width: '200px'
          }}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
