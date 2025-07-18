'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"



import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { email } from 'zod/v4-mini'
import CustomInput from './CustomInput'
import { authformSchema } from '@/lib/utils'
import { AArrowUp, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'



const AuthForm = ({type}: {type:string}) => {

    const router = useRouter();

    const [user, setUser] = useState(null);
    const [isloading, setIsloading] = useState(false);
    
   
    
    const formSchema = authformSchema(type);

      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })


    // 2. Define a submit handler.
  const onSubmit= async(data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsloading(true)
    try {
        if (type === 'sign-up'){
            const newUser = await signUp(data);

            setUser(newUser);

            }
        

        if (type ==='sign-in') {
            const response = await signIn({email: data.email, password: data.password});

            if (response) router.push('/');
        }
    
        
    } catch  (error) {
        console.log(error);

  } finally {
    setIsloading(false);
  }
}


  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
             <Link
                    href="/"
                    className='cursor-pointer flex items-center gap-2'>

                    <Image
                        src="/icons/logo2.svg"
                        width={40}
                        height={50}
                        alt="logo"
                        className='size-[30px]
                max-xl:size-14 mt-1'
                    />

                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
                        Bread Box
                    </h1>

                </Link>

                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className= 'text-24 lg:text-36 font-semibold text-gray-900'>
                        {user
                        ? 'Link Account'
                        : type === 'sign-in'
                            ? 'Sign in'
                            : 'Sign up'}

                           <p className='text-16 font-normal text-gray-600'>
                            {user
                            ? 'Link your account to get started'
                            : "Please enter your details"
                            }
                            </p> 
                    </h1>
                </div>
        </header>
        {user ? (
        <div className=' flex flex-col gap-4'>
            {/*PlaidLInk */}
        </div>
  ): (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        {type ==='sign-up' && (
            <>

            <div className=' flex gap-5'>
                   <CustomInput control = {form.control} name= 'firstName' label = 'First Name'  placeholder='Enter your first name'/>
               <CustomInput control = {form.control} name= 'lastName' label = 'Last Name'  placeholder='Enter your last name'/>
            </div>
           
                <CustomInput control = {form.control} name= 'address1' label = 'Address'  placeholder='Enter your address'/>
                <CustomInput control = {form.control} name= 'city' label = 'City'  placeholder='Enter your city'/>

                <div className='flex gap-5'>
                  <CustomInput control = {form.control} name= 'state' label = 'State'  placeholder='ex: BC'/>
                  <CustomInput control = {form.control} name= 'postalCode' label = 'Postal Code'  placeholder='ex: V6T 1T1'/>
                </div>

                <div className='flex gap-5'>
                       <CustomInput control = {form.control} name= 'dateOfBirth' label = 'Date of Birth'  placeholder='yyyy-mm-dd'/>
                    <CustomInput control = {form.control} name= 'ssn' label = 'SSN'  placeholder='ex: 1234'/>
                </div>
               
                
               </>
        )}
        
        <CustomInput control = {form.control} name= 'email' label = 'Email'  placeholder='Enter your email'/>

        <CustomInput control = {form.control} name= 'password' label = 'Password'  placeholder='Enter your password'/>


        <div className=' flex flex-col gap-4'>
            <Button className='form-btn' type="submit" disabled = {isloading}>
            {isloading? (
                <>
                <Loader2 size={20} className="animate-spin" />
                    &nbsp; Loading...

                </>
             ) : type === 'sign-in'
                ? "Sign in" : 'Sign up'

            }
        </Button>
        </div>
      </form>
    </Form>
  
            
    
  )
}

<footer className='flex justify-center gap-1'>
    <p className='text-14 font-normal text-gray-600'>
        {type ==='sign-in'
        ?"Don't have an account?"
        : "Already have an account?"}
    </p>

    <Link href = {type  === 'sign-in' ? '/sign-up'
        :'/sign-in'}
     className='font-link'>
        {type === 'sign-in' ? 'Sign up' : 'Sign in'}

    </Link>

</footer>

    </section>
  )
}

export default AuthForm