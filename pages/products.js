//taskdaki kimi SSR ve qeyd oludugu kimi GetServerSideProps ile yazmisam

import Link from "next/link"

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    return { props: { products } }
}
export default function ProductsPage({ products }) {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: "row", marginLeft: '10px' }}>
                <h1 style={{ borderLeft: '4px solid red', height: '30px', fontFamily: 'monospace' }}>Products</h1></div>
            <div style={{ display: 'flex', padding: '10px', gap: '10px', fontFamily: 'monospace' }}>
                {products.map((data) => (
                    <Link href={`/products/${data.id}`} key={data.id} style={{
                        display: 'flex', flexDirection: 'column',
                        gap: '5px', padding: '20px', width: '30vh',
                        border: '3px solid springgreen', borderRadius: '5px'
                    }} >
                        {console.log(data)}
                        <h1>{data.name}</h1>
                        <h1>{data.desc}</h1>
                        <h1>${data.price}</h1>
                    </Link>
                ))}
            </div>

        </>
    )
}