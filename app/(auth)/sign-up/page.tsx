import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import Link from "next/link";
import GoogleIcon from "../../../public/google.svg";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className='absolute mt-24 rounded bg-black/60 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
      <form action=''>
        <h1 className='text-3xl font-semibold text-white'>Sign up</h1>
        <div className='space-y-4 mt-5'>
          <Input
            type='email'
            name='email'
            placeholder='Courriel'
            className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
          />
          <Button
            type='submit'
            variant='destructive'
            className='w-full bg-[#e50914]'
          >
            Sign up
          </Button>
        </div>
      </form>

      <div className='text-gray-500 text-sm mt-2'>
        Already have an account?{" "}
        <Link className='text-white hover:underline' href='/login'>
          {"Log in now ! "}
        </Link>
      </div>

      <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
        <Button variant='outline' size='icon'>
          <Github className='h-4 w-4' />
        </Button>
        <Button variant='outline' size='icon'>
          <Image src={GoogleIcon} alt='Google icon' className='h-6 w-6' />
        </Button>
      </div>
    </div>
  );
}
