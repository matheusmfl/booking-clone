/* eslint-disable @next/next/no-img-element */
'use client'
import { Bars3Icon } from "@heroicons/react/24/outline"
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link"
import { Fragment, useState } from 'react'
import { Popover, Transition } from "@headlessui/react"



function Header() {
  const [mobileOpenMenu, setMobileOpenMenu] = useState(false)

  const products = [
    {
      name: "Book a Stay",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: HomeIcon,
    },
    {
      name: "Book a Flight",
      description: "Speak directly to your customers",
      href: "#",
      icon: PaperAirplaneIcon,
    },
    {
      name: "Contact our Support Team",
      description: "Your customers’ data will be safe and secure",
      href: "#",
      icon: ChatBubbleLeftIcon,
    },
  ]

  const callsToAction = [
    { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
    { name: "Contact Support", href: "#", icon: PhoneIcon },
  ];

  return (
    <header className="bg-[#013B94]">
      <nav className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="global">

        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">
              ZenonBooking.com
            </span>

            <img
              src="https://images.squarespace-cdn.com/content/5bde0f00c3c16aa95581e2e2/1656116234438-
            NLIQ8XQTV7D805TPUH8X/booking+logo+white.png?format=1500w&content-type=image%2Fpng"
              alt="" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="submit"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileOpenMenu(true)} >

            <span>
              Open main menu
            </span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className={"relative"}>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Hospedagens
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >

              <Popover.Panel className="absolute bg-white -left-8
              top-full z-10 mt-3 w-screen max-w-md
              overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 ">
                  {products.map((item) => {
                    return (
                      <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                          <item.icon
                            className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                            aria-hidden="true"
                          />
                        </div>

                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-[#013B94]"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-[#013B94]">
                            {item.description}
                          </p>
                        </div>

                      </div>
                    )
                  })}
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#013B94]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Aéreo
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Aluguel de carro
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Eventos
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Passagens + hotel
          </a>
        </Popover.Group>

      </nav>
    </header>
  )
}

export default Header