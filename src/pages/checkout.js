import { selectItems, selectTotal } from '../slices/basketSlice'
import { signIn, signOut, useSession } from 'next-auth/client'

import CheckoutProductItem from '../components/CheckoutProductItem'
import Currency from 'react-currency-formatter'
import Header from '../components/Header'
import Image from 'next/image'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const stripePromise = loadStripe(process.env.strip_public_key)

function Checkout() {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const [session] = useSession()
  const createCheckoutSession = async () => {
    const stripe = await stripePromise

    const checkoutSession = await axios
      .post('/api/create-checkout-session', {
        items: items,
        email: session.user.email,
      })
      .catch((err) => {
        console.error(err)
      })

      console.log('====================================');
      console.log(checkoutSession.data.id);
      console.log('====================================');

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    if (result.error) alert(result.error)
  }
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto  shadow-sm">
        {/* left */}
        <div className="flex-grow m-5 ">
          <Image
            src="https://links.papareact.com/ikj"
            width="1020"
            height="250"
            objectFit="contain"
          />

          <div className="flex flex-col p-s space-y-10 bg-white-">
            <h1 className="text-3xl border-b pb-4">
              {' '}
              {items && items.length
                ? 'Your Amazon Cart is empty.  '
                : 'Your Shopping Basket'}
            </h1>

            {items.map((item, index) => (
              <CheckoutProductItem
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                key={index}
                hasPrime={item.hasPrime}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items && items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold">
                  <Currency quantity={total * 107.8} currency={'KES'} />
                </span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={` mt-2 ${!session ? 'disabledButton' : 'button'}`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout
