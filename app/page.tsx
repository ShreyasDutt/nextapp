"use client"

import { useState,FormEvent } from "react"
import {redirect} from "next/navigation";

export default function NameInput() {
    const [name, setName] = useState("")


    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        redirect('/prediction/'+name);
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-black">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-md px-4 py-8">
                <form onSubmit={handleSubmit} className="rounded-lg border border-purple-900/50 bg-black/80 p-8 shadow-lg backdrop-blur-sm">
                    <div className="mb-6 text-center">
                        <h1 className="mb-2 text-2xl font-bold text-white">Nationality Prediction</h1>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <input
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-md border border-purple-900/50 bg-black/50 px-4 py-2 text-white placeholder:text-purple-100/30 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>

                        <button type={"submit"}  className="w-full rounded-md bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-2 text-white transition-all hover:from-purple-500 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

