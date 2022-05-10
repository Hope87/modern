import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

interface ILinks {
  id: number,
  name: string,
  href: string
}


const links: ILinks[] = [
  {id: 1, name: 'Home', href: '/'},
  {id: 2, name: 'What is GPT3?', href: '/whatGPT3'},
  {id: 3, name: 'Open AI', href: '/possibility'},
  {id: 4, name: 'Case Studies', href: '/features'},
  {id: 5, name: 'Library', href: '/blog'},
]


const Header: FC = () => {
  const [toogleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="gradient-bg flex justify-between items-center py-8 px-24 md:py-8 md:px-16 sm:p-8">
      <div className="flex-1 flex justify-start items-center">
        <div className="mr-8">
          <Image src="/logo.svg" alt="logo" width={62} height={16} />
        </div>
        <div className="flex flex-row lg:hidden">
          {links.map(link => (
            <p key={link.id} className="text-white font-base font-medium text-base capitalize my-0 mx-4 cursor-pointer">
            <Link href={link.href}>{link.name}</Link>
          </p>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center sm:hidden">
        <p className="text-white font-base font-medium text-base capitalize my-0 mx-4 cursor-pointer">
          Sign in
        </p>
        <button
          type="button"
          className="py-2 px-4 text-white bg-orange-600 font-base font-medium text-base rounded-md"
        >
          Sign up
        </button>
      </div>
      <div className="hidden relative ml-4 lg:flex">
        {toogleMenu ? (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="white"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toogleMenu && (
          <div className="flex flex-col justify-end items-end text-right bg-footer p-8 absolute top-10 right-0 mt-4 min-w-[210px] rounded-md shadow-stone-700 sm:top-5">
            <div>
            {links.map(link => (
            <p key={link.id} className="text-white font-base font-medium text-base capitalize my-4 mx-4 cursor-pointer">
            <Link href={link.href}>{link.name}</Link>
          </p>
          ))}
              <div className="hidden sm:block">
                <p className="text-white font-base font-medium text-base capitalize my-0 mx-4 cursor-pointer">
                  Sign in
                </p>
                <button
                  type="button"
                  className="py-2 px-4 my-4 text-white bg-orange-600 font-base font-medium text-base rounded-md"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
