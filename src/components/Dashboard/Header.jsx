"use client"
import { useRouter } from "next/navigation"

const Header = ({title}) => {

    const router = useRouter()
    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4 px-10">
            <h3 className="text-2xl text-color-primary ">{title}</h3>
            <button className="text-color-primary " onClick={handleBack}>BACK</button>
        </div>
    )
}

export default Header