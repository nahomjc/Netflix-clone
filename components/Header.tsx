import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ThemToggler } from './ThemeToggler';
import SearchInput from './SearchInput';
import GenreDropdown from './GenreDropdown';

const Header = () => {
  return (
    <header className='fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 '>
     <Link href='/'>
        <Image  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
          width={70}
          height={30}
          alt="Netflix logo"
          className={"cursor-pointer inver-0 "} />
         </Link>
        
         <div className='flex space-x-2'>
<GenreDropdown/>
<SearchInput/>
        <ThemToggler/>
         </div>
    </header>
  );
}

export default Header;
