import React from 'react'
import { SignIn } from '@clerk/nextjs'
import Animation from '@/components/animation'

const Signin = () => {
    return (
        <>
            <Animation />
            <SignIn />
        </>
    )
}

export default Signin
