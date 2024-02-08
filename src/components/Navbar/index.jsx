import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-color-accent px-4">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 p-4">
                <Link className="font-bold text-2xl text-color-bgPrimary" href="/">NATANIMELIST</Link>
                <div className="flex md:flex-row flex-col md-items-center gap-6">
                <InputSearch/>
                <UserActionButton />
                </div>
                
            </div>
        </header>
    )
}

export default Navbar