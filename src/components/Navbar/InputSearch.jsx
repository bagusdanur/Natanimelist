"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value.trim()
        if (keyword) {
            router.push(`/search/${keyword}`)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            handleSearch(event);
        }
    };

    return (
        <div className="relative">
            <input placeholder="Cari Anime..." className="p-2 rounded w-full border border-color-bgPrimary" ref={searchRef} onKeyDown={handleKeyDown} />
            <button className="absolute top-2 end-2 text-color-bgPrimary"><MagnifyingGlass size={24} onClick={handleSearch} /></button>
        </div>
    )
}

export default InputSearch