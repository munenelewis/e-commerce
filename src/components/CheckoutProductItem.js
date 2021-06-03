import Currency from 'react-currency-formatter'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const MAX_RATING = 6
const MIN_RATING = 1
function CheckoutProductItem({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating
}) {
  
  console.log('====================================')
  console.log(image)
  console.log('====================================')
  return (
    <div className="grid grid-cols-5">
      <Image alt="" src={image} height={200} width={200} objectFit="contain" />
      {/* middle  */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex h-3">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500 " />
            ))}
        </div>
        <p className="text-sx my line-clamp-3">{description}</p>

        <Currency quantity={price} currency={'KES'} />
        {hasPrime ? (
          <div className="flex items-center spac-x-2">
            <img
              alt=""
              loading="lazy"
              className="w-12"
              alt=""
              src="http://links.papareact.com/fdw"
            />
            <p className="text-xs text-green-500">Free Next-day Delivery</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default CheckoutProductItem
