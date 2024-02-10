import Link from "next/link"
import InputSearch from "./InputSearch"
import DropdownMenu from "./DropdownMenu"
import { authUserSession } from "@/libs/auth-libs"

const Navbar = async() => {
    const user = await authUserSession();
    return (
        <header className="navbar px-4 ">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 p-4">
            <div className="flex flex-row justify-between">
            <Link href="/" passHref>
                <span className="font-bold text-2xl text-color-accent">NATANIMELIST</span>
            </Link>
            <div className="md:hidden"> {/* Display DropdownMenu beside NATANIMELIST on mobile */}
                    <DropdownMenu user={user} />
                </div>
            </div>
            
            <div className="flex md:flex-row flex-col md-items-center gap-6">
                
                <InputSearch />
                <div className="md:flex hidden"> {/* Hide DropdownMenu on mobile */}
                    <DropdownMenu user={user} />
                </div>
            </div>
        </div>
    </header>
    );
};

export default Navbar;