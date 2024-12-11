"use client"
import LoginForm from "@/components/LoginForm"
import SignUpForm from "@/components/SignUpForm"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function User(){
    const [isLogin, setIsLogin] = useState(true)
    return(
        <div className="min-h-screen flex flex-col justify-center text-black items-center content-center bg-gray-50">
         <div className="mb-4">
            <Button className="text-sm"
            onClick={(isLogin) => setIsLogin(!isLogin)}
            variant={"ghost"}>

                {isLogin ? "Need a account: Create": "Login with your current Account"}

            </Button>
         </div>
         {isLogin ? <LoginForm/>: <SignUpForm/>}
        </div>
    )
}