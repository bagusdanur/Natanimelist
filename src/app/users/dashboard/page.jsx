import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()
    return (
        <div className="mt-5 text-color-primary flex justify-center items-center flex-col">
            <h5 className="text-2xl font-bold py-2">Welcome, {user?.name}</h5>
            <Image className="py-5" src={user?.image} alt="..." width={250} height={250}/>
            <div className="flex gap-4 py-8">
                <Link href="/users/dashboard/favorites" className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl">My favorites</Link>
                <Link href="/users/dashboard/comment" className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl">My Comment</Link>
            </div>
        </div>
    )
}

export default Page