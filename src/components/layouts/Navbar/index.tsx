import { Popover, Transition } from "@headlessui/react";
import { HiMenu } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi2";
interface Props {
  setOpen: (v: boolean) => void;
  isMini: boolean;
  setIsMini: () => void;
}

const Navbar = ({ setOpen, isMini, setIsMini }: Props) => {
  return (
    <header className="relative bg-white border-b border-gray-200">
      {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p> */}

      <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="flex h-16 items-center">
            <button
              onClick={setIsMini}
              className="mr-2 rounded-[100%] border p-1"
            >
              <HiChevronLeft className={`${isMini ? "rotate-180" : ""}`} />
            </button>
            {/* <button
              type="button"
              className="rounded-md bg-white p-2 text-gray-400 "
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>

              <HiMenu className="h-6 w-6" aria-hidden="true" />
            </button> */}

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8"></div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign in
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create account
                </a>
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-800"
                >
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                  />
                  <span className="ml-3 block text-sm font-medium">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  {/* <MagnifyingGlassIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                /> */}
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 flex items-center p-2">
                  {/* <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                /> */}
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
