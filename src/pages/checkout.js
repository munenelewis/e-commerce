import CheckoutProductItem from '../components/CheckoutProductItem'
import Header from '../components/Header'
import Image from 'next/image'
import { selectItems } from '../slices/basketSlice'
import { useSelector } from 'react-redux'

function Checkout() {
  const items = useSelector(selectItems)
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
              {items && items.length < 0
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
      </main>
    </div>
  )
}

export default Checkout
