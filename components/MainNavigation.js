/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from 'next/router';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" },
];

const socialMedia = [
  {name:'instagram-teescoco', link:'https://www.instagram.com/adityadimasptra/', icon:'/instagram-dark.svg', active: true},
  {name:'facebook-teescoco', link:'https://www.facebook.com/adityadimasptra', icon:'/facebook-dark.svg', active: true},
  {name:'whatsapp-teescoco', link:'https://wa.me/6281553176532', icon:'/whatsapp-dark.svg', active: false}
]

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="h-20 z-20">
      <div className="w-full bg-white py-6 fixed z-50 items-center inset-x-0 shadow-sm">
        <div className="relative z-10 lg:w-full">
          <Popover>
            <div className="relative px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                      <a>
                        <span className="sr-only">Workflow</span>
                        <Image
                          alt="treescoco-logo"
                          width={115}
                          height={35}
                          src="/treescoco_logo.png"
                        />
                      </a>
                    </Link>
                    <div className="mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a className={router.pathname == item.href ? "item-link active" : "item-link"}>
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Image
                        src="/treescoco_logo.png"
                        width={115}
                        height={35}
                        alt="treescoco-logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="flex items-center justify-center py-6 px-5 space-y-6 ">
                    <div className="">
                      {socialMedia.map((social,index) => {
                        if (social.active) return (
                          <div className="mx-2 inline-flex" key={index}>
                            <a
                              href={social.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center"
                            >
                              <Image className="heartbeat" src={social.icon} alt="site logo" width={35} height={35} />
                            </a>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
}
