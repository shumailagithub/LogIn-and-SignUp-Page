"use client" // this is a client component 👈🏽
import { useState } from "react"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader,CardDescription, CardTitle} from "@/components/ui/card"

const SignUpForm = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault
        console.log('SignUp successfully with the:', {email, password, confirmPassword})

}
return(
    <Card className="w-[350px]">
     <CardHeader>
        <CardTitle>SignUp</CardTitle>
        <CardDescription>Enter the details to create new account</CardDescription>
     </CardHeader>
     <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Input 
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                required
                />
            </div>


            <div className="space-y-2">
                <Input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
                required
                />
            </div>

            <div className="space-y-2">
                <Input
                type="password"
                placeholder="Enter your confirm Password"
                value={confirmPassword}
                onChange={(e) =>setConfirmPassword(e.target.value)}
                required
                />
            </div>


            <Button
            type="submit"
            className="w-full"
            onClick={()=> alert('Thanks for SignUp!')}>SignUp</Button>

        </form>
     </CardContent>
    </Card>
)

}

export default SignUpForm