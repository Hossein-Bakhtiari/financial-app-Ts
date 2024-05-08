import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import ButtonLink from "../commen/ButtonLink";

function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8">
            <div className="flex">
              <ButtonLink
                href="#"
                children={<img src={Kobodrop} alt="Kobodrop logo" />}
              />
              <div className="ml-4 hidden items-center  space-x-4 sm:flex ">
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#partners"
                >
                  Partners
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#reviews"
                >
                  Reviews
                </a>
              </div>
            </div>

            <a
              href="https://play.google.com"
              target="_blank"
              className="hidden rounded-xl bg-gray-700 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:flex"
            >
              Install App
            </a>
            <DisclosureButton className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </DisclosureButton>
          </div>
          <DisclosurePanel>
            <DisclosureButton className="block" as="a" href="#features">
              Features
            </DisclosureButton>
            <DisclosureButton className="block" as="a" href="#reviews">
              Reviews
            </DisclosureButton>
            <DisclosureButton className="block" as="a" href="#partners">
              Partners
            </DisclosureButton>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
