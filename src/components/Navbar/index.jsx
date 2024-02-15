import Link from "next/link"
import InputSearch from "./InputSearch"
import DropdownMenu from "./DropdownMenu"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import DarkMode from "../Utilities/DarkMode"

const Navbar = async () => {
    const user = await authUserSession();
    const favorites = await prisma.favorites.findMany({
        where: { user_email: user?.email },
    });
    const comments = await prisma.comment.findMany({ where: { user_email: user?.email } })
    return (
        <header className=" px-4 ">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 p-4">
                <div className="flex flex-row justify-between">
                    <Link href="/" passHref>
                        <span className="font-bold text-2xl text-color-accent">NATANIMELIST</span>
                    </Link>
                    <div className="md:hidden flex gap-3"> {/* Display DropdownMenu beside NATANIMELIST on mobile */}
                        <DarkMode />
                        <DropdownMenu user={user} favorites={favorites} comment={comments} />
                    </div>
                </div>

                <div className="flex md:flex-row flex-col md:items-center gap-4 ">
                    <Link className="text-lg md:flex hidden" href='/anime'>Anime</Link>
                    <Link className="text-lg md:flex hidden" href='/manga'>Manga</Link>
                    <InputSearch />FavoritesButton
                    <div className="md:flex hidden gap-3"> {/* Hide DropdownMenu on mobile */}
                        <DarkMode />
                        <DropdownMenu user={user} favorites={favorites} comment={comments} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;