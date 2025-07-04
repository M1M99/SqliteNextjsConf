const { default: prisma } = require('@/lib/prisma')

export async function GET(request, { params }) {
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) }
  })

  if (!product) {
    return new Response('Not Found', { status: 404 })
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}


export async function DELETE(req, { params }) {
  try {
    const product = await prisma.product.delete({
      where: { id: Number(params.id) }
    })
    return new Response(JSON.stringify(product), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  }
  catch {
    return new Response({ status: 404 })
  }
}

export async function PUT(req, { params }) {
  const body = await req.json();
  const product = await prisma.product.update({
    where: { id: Number(params.id) },
    data: {
      name: body.name,
      price: body.price,
      desc: body.desc
    }
  })
  return new Response(JSON.stringify(product), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  })
}