import Link from "next/link"

function Header() {
    return (
        <header className="flex bg-gray-700 p-4 justify-between">
            <Link className="text-2xl text-white hover:text-amber-200" href='/products'>Products</Link>
            <Link className="text-2xl text-white hover:text-amber-200" href='/latest-products'>Latest Products</Link>
        </header>
    )
}

export default Header
