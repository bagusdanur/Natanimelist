import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import FavoritesDelete from "@/components/Dashboard/FavoritesDelete";


const Page = async () => {

    const user = await authUserSession();
    const favorites = await prisma.favorites.findMany({
        where: { user_email: user.email },
    });

    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My favorites"} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {favorites.map((collect, index) => {
                    return (
                        <div key={index} className="relative">
                            <FavoritesDelete id={collect.id} />
                            <Link href={`/anime/${collect.anime_mal_id}`}>
                                <Image
                                    src={collect.anime_image}
                                    alt={collect.anime_image}
                                    width={350}
                                    height={350}
                                    className="w-full"
                                />
                                <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                                    <h5 className="text-xl text-center">{collect.anime_title}</h5>
                                </div>
                            </Link>


                        </div>
                    );
                })}
                <p className="text-center mt-4 text-gray-500">
                    
                </p>
            </div>
        </section>
    );
};

export default Page;