import { CheckCircleIcon } from '@heroicons/react/solid'
import Header from '../components/Header'
import { useRouter } from 'next/router'

function success() {
  const router = useRouter()
  return (
    <di className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you for your order , our order has been confirmed
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis
            molestie velit, vitae tincidunt risus. Vivamus nec sem sit amet
            justo faucibus tincidunt. Integer quis cursus erat, vitae hendrerit
            lacus. Vivamus ornare ante id libero luctus, at tempor lectus
          </p>
          <button onClick={()=>router.push('/orders')} className="button mt-8">Go to my orders</button>
        </div>
      </main>
    </di>
  )
}

export default success
