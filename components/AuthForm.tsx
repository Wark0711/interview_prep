"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "./ui/form"
import Image from "next/image"

const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
})


export function AuthForm({ type }: { type: string }) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    const isSignIn = type === 'sign-in'

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src={'./logo.svg'} alt="logo" height={32} width={38} />
                    <h2 className="text-primary-100">WDT Interview Prep</h2>
                </div>
                <h3 className="text-center">Practice job interview with AI</h3>


                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        
                    </form>
                </Form>
            </div>
        </div>
    )
}