import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ThemToggler } from './ThemeToggler';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <header className='fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 '>
     <Link href='/'>
        <Image  src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer inver-0 dark:invert"} />
         </Link>
         <div className='flex space-x-2'>
<SearchInput/>
        <ThemToggler/>
         </div>
    </header>
  );
}

export default Header;
