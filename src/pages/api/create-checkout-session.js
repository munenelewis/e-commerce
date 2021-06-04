import axios from 'axios'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res, next) => {
  const { items, email } = req.body

  const transformedItems = items.map((item) => ({
    description:item.description,
    quantity: 1,
    price_data: {
      currency: 'USD',
      unit_amount: Math.ceil(item.price * 107.89),
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1IyTADGkJ1UijP57vIDxKxe7'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  })

  res.status(200).json({
    id: session.id,
  })

  console.log('====================================');
  console.log(session , "response");
  console.log('====================================');
}
