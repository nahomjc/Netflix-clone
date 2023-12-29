import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ThemToggler } from './ThemeToggler';

const Header = () => {
  return (
    <header>
     <Link href='/'>
        <Image  src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer inver"} />
         </Link>
         <div className='flex space-x-2'>

        <ThemToggler/>
         </div>
    </header>
  );
}

export default Header;
