import React from 'react'
import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Signup = async () => {

  return (
     <section className=' flex-center size-full max-sm:px-6'>
      <AuthForm type = "sign-up"/>
    </section>
  )
}

export default Signup