import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contactus from "./Contactus";


interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Competencias', href: '/', current: true },
  { name: 'Mi Tribu', href: '#courses-section', current: false },
  { name: 'Nutrición', href: '#mentors-section', current: false },
  { name: 'Blog', href: '#testimonial-section', current: false },
  { name: 'Planes', href: '#join-section', current: false },
  { name: 'Contacto', href: '#join-section', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="bg-orange navbar">
      <>
        <div className="w-full">
          <div className="relative flex h-20 items-center justify-between">
            <div className="w-full">
              <div className="relative flex h-20 items-center justify-between">

                {/* LOGO */}
                <div className="flex px-3 flex-1 items-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block lg:hidden"
                      style={{
                        width: '80%',
                      }}
                      src={'/assets/logo/Logo.svg'}
                      alt="Courses-Logo"
                    />
                    <img
                      className="hidden h-48px w-48px lg:block"
                      src={'/assets/logo/Logo.svg'}
                      alt="Courses-Logo"
                    />
                  </div>
                </div>

                {/* LINKS */}
                <div className="w-full flex items-center justify-end">

                  <div className="hidden sm:ml-14 md:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-purple' : 'hover:text-purple',
                            'px-3 py-4 text-15px font-medium space-links text-white'
                          )}
                          aria-current={item.href ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Contactus />
                    </div>
                  </div>

                  <div className='trapecioRectangulo flex items-center justify-center'>
                    <div className='flex items-center justify-center'>
                      {/* ICONS */}
                      <div className='trapecioRectanguloa bg-black h-20 flex items-center justyfy-center pl-4'>
                        <img
                            src={'/assets/icon/search.svg'}
                            alt="search-Logo"
                          />
                          <div className="relative">
                            <img src="/assets/icon/shoppingCart.svg" alt="shoppingCart-Logo" />
                            <div className="absolute -top-1 -right-1 bg-red rounded-full w-4 h-4 flex items-center justify-center">
                              <span className="text-white text-xs">1</span>
                            </div>
                          </div>
                          <div className="relative">
                            <img src={'/assets/icon/bell.svg'} alt="bell-Logo" />
                            <div className="absolute -top-1 -right-1 bg-red rounded-full w-4 h-4 flex items-center justify-center">
                              <span className="text-white text-xs">1</span>
                            </div>
                          </div>
                      </div>
                      <div className='bg-current h-20 flex items-center justyfy-center px-4'>
                        {/* AVATAR */}
                        <img
                          className="hidden md:block inline-block h-12 w-12 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=..."
                          alt=""
                        />
                        {/* DRAWER ICON */}
                        <Bars3Icon className="block md:hidden h-8 w-8" aria-hidden="true" onClick={() => setIsOpen(true)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* DRAWER FOR MOBILE VIEW */}

            

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>

          </div>
        </div>
      </>
    </Disclosure>
  )
}

export default Navbar;