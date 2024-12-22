"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '/components/ui/button.jsx';

function Header() {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image 
        src="/log.svg" 
        alt="logo" 
        width={80} 
        height={100} 
      />
        <Button>Get Started</Button>
    </div>
  );
}

export default Header;
