import prisma from '../../../lib/prisma'
export async function GET() {
    const products = await prisma.product.findMany();
    return Response.json(products)
}   

export async function POST(req) {
    const body = await req.json();
    const data = await prisma.product.create({
        data:{
            name:body.name,
            price:body.price,
            desc:body.desc
        }
    })
    return Response.json(data)
}