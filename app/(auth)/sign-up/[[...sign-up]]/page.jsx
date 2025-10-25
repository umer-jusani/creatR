import React from 'react'
import { SignUp } from '@clerk/nextjs'
import Animation from '@/components/animation'

const Signup = () => {
    return (
        <>
            <Animation />
            <SignUp />
        </>
    )
}

export default Signup
