import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import ButtonLink from "../commen/ButtonLink";

function Navbar() {
  const textLinkClasses =
    "text-gray-500 hover:text-gray-900 active:text-gray-400";

  const navLinks = [
    { href: "#features", children: "Featuers" },
    { href: "#reviews", children: "Reviews" },
    { href: "#partners", children: "Partners" },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 xl:m-auto lg:px-12">
            <div className="flex">
              <ButtonLink
                href="#"
                children={<img src={Kobodrop} alt="Kobodrop logo" />}
              />
              <div className="ml-4 hidden items-center  space-x-4 sm:flex ">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    children={link.children}
                    className={textLinkClasses}
                  />
                ))}
              </div>
            </div>

            <ButtonLink
              href="https://play.google.com"
              target="_blank"
              children={"Install App"}
              className="hidden rounded-xl bg-gray-700 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:flex"
            />

            <DisclosureButton className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </DisclosureButton>
          </div>
          <DisclosurePanel className="space-y-1 px-4 sm:hidden">
            {navLinks.map((link, index) => (
              <DisclosureButton
                className="block"
                as="a"
                href="#features"
                key={index}
              >
                {link.children}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
