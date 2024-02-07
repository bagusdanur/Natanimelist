const HeaderMenu = ({ title }) => {
    return (
        <div>
            <div className="md:p-8 p-4 text-center">
                <h3 className=" text-2xl text-color-primary">{title}</h3>
            </div>
        </div>
    )
}

export default HeaderMenu