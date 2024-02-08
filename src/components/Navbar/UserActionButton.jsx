import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession();
    
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex gap-2 justify-between">
            {
                user ? <Link className="py-2" href="/users/dashboard">Dashboard</Link> : null
            }
            
            <Link className="bg-color-dark text-color-navbarText py-2 px-6  inline-block rounded" href={actionUrl} >{actionLabel}</Link>
        </div>

    )
}

export default UserActionButton