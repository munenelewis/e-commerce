import Currency from 'react-currency-formatter'
import moment from 'moment'

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  console.log('====================================')
  console.log( images)
  console.log('====================================')
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">Orders Placed {amount}</p>
          <p>{moment.unix(timestamp).format('LL')}</p>
        </div>

        <div>
          <p className="text-xs font-bold">
            <Currency quantity={amount} currency="KES" /> Next day delivery{' '}
            <Currency quantity={amountShipping} currency="KES" />
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-71 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => {
              {console.log(image, "loop throug image")}
            <img src={String(image)} alt="" className="h-20 object-contain sm:h-32" />
          })}
        </div>
      </div>
    </div>
  )
}

export default Order
