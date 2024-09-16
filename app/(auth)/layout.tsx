import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/login_new_background.jpg";
import Logo from "../../public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center ms:bg-transparent'>
      <Image
        src={BackgroundImage}
        alt='Background Image netflix France septembre 2024'
        className='hidden sm:flex sm:object-cover -z-9 brightness-50' /*-z-10 pour z-index*/
        priority
        fill
      />

      <Image
        src={Logo}
        alt='Logo Netflix'
        width={150}
        priority
        className='absolute left-10 top-4 object-contain md:left-15 md:top-10'
      />
      {children}
    </div>
  );
}
