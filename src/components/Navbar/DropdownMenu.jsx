"use client"

import { ChatCircle, Folder, Heart, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useState } from 'react'

const DropdownMenu = ({ user }) => { // Mengambil props sebagai objek { user }
    const [openMenu, setOpenMenu] = useState(false)
    const isLoggedIn = !!user // Memeriksa apakah prop user telah diberikan

    return (
        <div>
            <div>
            {isLoggedIn ? (
                        user.image ? <img onClick={() => setOpenMenu(prev => !prev)} src={user.image} className="userImage cursor-pointer" alt="User Avatar" /> : <UserCircle size={42} />
                    ) : (
                        <UserCircle className="cursor-pointer" onClick={() => setOpenMenu(prev => !prev)} size={42} />
                    )}
            </div>
            {openMenu && (
                <div className='dropdownMenu z-10'>
                    {isLoggedIn ? (
                        <React.Fragment>
                            <h3 className='text-color-titleColor'>@{user.name}</h3> {/* Menggunakan user.name karena prop user tampaknya memiliki properti name dan email */}
                            <p className='pb-3 text-base text-color-titleColor'>@{user.email}</p>
                            <ul className='flex flex-col gap-3'>
                            <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/users/dashboard"><Folder size={24} />Dashboard</Link></li>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/users/dashboard/favorites"><Heart size={24} />My Favorites</Link></li>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/users/dashboard/comment"><ChatCircle size={24} />My Comment</Link></li>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/api/auth/signout">Logout</Link></li>
                            </ul>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <ul className='flex flex-col gap-3'>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/api/auth/signin">Login</Link></li>
                            </ul>
                        </React.Fragment>
                    )}
                </div>
            )}
        </div>
    )
}

export default DropdownMenu