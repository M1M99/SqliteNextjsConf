//taskdaki kimi SSR ve qeyd oludugu kimi GetServerSideProps ile yazmisam

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    return { props: { products } }
}
export default function ProductsPage({ products }) {
    return (
        <div>
            {products.map((data) => (
                <li key={data.id} style={{listStyleType:'none'}}>
                    {console.log(data)}
                    <h1>{data.name}</h1>
                    <h1>{data.desc}</h1>
                    <h1>{data.price}</h1>
                </li>
            ))}
        </div>
    )
}