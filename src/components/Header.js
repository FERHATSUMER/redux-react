import React from 'react';
import { MdPostAdd } from 'react-icons/md';

export default function Header() {
  return (
    <div className='flex items-center justify-between bg-indigo-600 text-white'>
      <div className='text-3xl'>React App</div>
      <div className='flex items-center flex-grow justify-center gap-2'>
        <input type="text" placeholder="Arama yapınız..." />
        <select className='text-black h-7 rounded-lg' name="sort" id="sort">
          <option value="asc">Artan</option>
          <option value="desc">Azalan</option>
        </select>
        <MdPostAdd />
      </div>
    </div>
  );
}
