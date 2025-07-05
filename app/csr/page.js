'use client'
//                  Bunu Taskdan Izole sekilde yazdimki Buda csr (client side render) ssr ise pages in icersindedir bura csrdir ISR de Oradadi

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
function ProductCSR() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/api/products')
            .then(data => data.json())
            .then(result => setProducts(result))
    }, [])
    return (
        <div>
            <h2>Bunu Taskdan Izole sekilde yazdimki Buda csr (client side render) ssr ise pages in icersindedir bura csrdir ISR de Oradadi</h2>
            {products.map(data => (
                <Link href={`/products/${data.id}`} key={data.id} style={{
                    display: 'flex', flexDirection: 'column',
                    gap: '5px', padding: '20px', width: '30vh', margin: '10px',
                    border: '2px solid springgreen', borderRadius: '2px'
                }} >
                    {console.log(data)}
                    <h1>{data.name}</h1>
                    <h1>{data.desc}</h1>
                    <h1>${data.price}</h1>
                </Link>
            ))}
        </div>
    )
}

export default ProductCSR
