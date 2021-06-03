// import styled from 'styled-components'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

import Image from 'next/image'

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search */}

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none p-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>hello lewis</p>
            <p className="font-extrabold md:text-sm">Account & list</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              10
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden  md:inline font-extrabold md:text-sm  mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-amazon_blue-light space-x-3 p-2 pl-6 text-white">
        {/* bottom nav */}

        <p className="link flex items-center  ">
          <MenuIcon className="h-6 mr-1" /> all
        </p>
        <p className="link ">Today's Deals</p>
        <p className="link ">Browsing History</p>
        <p className="link ">Customer Service</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header

// All
// Today's Deals
// Browsing History
// Customer Service
// Buy Again
// munene's Amazon.com
// Gift Cards
// Sell
// Registry
