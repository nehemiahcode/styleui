"use client"
import Logo from "@/components/Logo.jsx";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex  items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-center flex flex-col justify-center">
                    <div className="pb-6 flex justify-center py-3">
                        <Logo/>
                    </div>
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-5xl">
                        Page not found
                    </h3>
                    <p className="text-gray-800 mt-3">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex justify-center my-4 items-center">
                        <Button onClick={() => history.back()}>Go back</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
