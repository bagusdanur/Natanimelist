import Link from "next/link";

const Header = ( { title, linkHref, linkTitle }) => {
    return (
        <div className="py-4 px-10 flex justify-between items-center">
            <h1 className="text-xl font-bold text-color-accent">{title}</h1>
            {linkHref && linkTitle 
            ?
            <Link href={linkHref} className=" text-color-primary md-text-xl text-md underline hover:text-indigo-500 transition-all">{linkTitle}</Link>
            : null
        }
            
        </div>
    )
}

export default Header