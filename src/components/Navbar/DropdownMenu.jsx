"use client"

import { ChatCircle, Folder, Heart, UserCircle, User, Envelope, ListBullets, SignIn, SignOut } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'

const DropdownMenu = ({ user, favorites, comment }) => { // Mengambil props sebagai objek { user }
    const [openMenu, setOpenMenu] = useState(false)
    const menuRef = useRef()
    const imgRef = useRef()
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && event.target !== imgRef.current) {
                setOpenMenu(false)
            }
        }

        window.addEventListener('click', handleClickOutside)

        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [menuRef, imgRef])
    const isLoggedIn = !!user // Memeriksa apakah prop user telah diberikan

    return (
        <div >
            <div className='rounded-lg border p-1 flex items-center justify-center'>
                {isLoggedIn ? (
                    user.image ? <img ref={imgRef} onClick={() => setOpenMenu(prev => !prev)} src={user.image} className="userImage cursor-pointer" alt="User Avatar" /> : <UserCircle size={34} />
                ) : (
                    <UserCircle ref={imgRef} className="cursor-pointer" onClick={() => setOpenMenu(prev => !prev)} size={34} />
                )}
            </div>
            {openMenu && (
                <div ref={menuRef} className='dropdownMenu z-10'>
                    {isLoggedIn ? (
                        <React.Fragment>
                            <h3 className=' flex flex-row gap-1'><User size={22} /> {user.name}</h3> {/* Menggunakan user.name karena prop user tampaknya memiliki properti name dan email */}
                            <p className='pb-3 text-base  flex flex-row gap-1'><Envelope size={22} /> {user.email}</p>
                            <ul className='flex flex-col gap-3'>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/genres/anime"><ListBullets size={24} />Genres</Link></li>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/users/dashboard"><Folder size={24} />Dashboard</Link></li>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/users/dashboard/favorites"><Heart size={24} />My Favorites <p className="text-color-dark bg-color-accent rounded-xl px-2">{favorites.length}</p></Link></li>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/users/dashboard/comment"><ChatCircle size={24} />My Comment <p className="text-color-dark bg-color-accent rounded-xl px-2">{comment.length}</p></Link></li>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/api/auth/signout"><SignOut size={24} />Logout</Link></li>
                            </ul>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <ul className='flex flex-col gap-3'>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/api/auth/signin"><SignIn size={24} />Login</Link></li>
                                <li ><Link className='py-2 px-3 text-base cursor-pointer rounded-3xl text-color-titleColor bg-color-bgMore hover:bg-color-accent flex flex-row gap-1' href="/genres/anime"><ListBullets size={24} />Genres</Link></li>
                            </ul>
                        </React.Fragment>
                    )}
                </div>
            )}
        </div>
    )
}

export default DropdownMenu