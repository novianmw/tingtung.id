import logo from "../assets/logo.png"

export default function NavBar() {
    return (
        <div className="w-full flex flex-row justify-between items-center">
            <div id="logo_brand" className="">
                <a href="/">
                    <img src={logo} alt="logo_brand" />
                </a>
            </div>
            <div id="navbar_menu" className="flex gap-5 items-center">
                <a href="" className="px-4 py-2 rounded-full duration-300 text-[#020F27] hover:bg-[#020F27] hover:text-[#F6F7F9]">
                    Home
                </a>
                <a href="" className="px-4 py-2 rounded-full duration-300 text-[#020F27] hover:bg-[#020F27] hover:text-[#F6F7F9]">
                    Apartment
                </a>
                <a href="" className="px-4 py-2 rounded-full duration-300 text-[#020F27] hover:bg-[#020F27] hover:text-[#F6F7F9]">
                    House
                </a>
                <a href="" className="px-4 py-2 rounded-full duration-300 text-[#020F27] hover:bg-[#020F27] hover:text-[#F6F7F9]">
                    Review
                </a>
            </div>
            <div id="navbar_login" className="flex items-center justify-end gap-5">
                <button className="px-4 py-2 rounded-full duration-300 text-[#117FF5] hover:bg-[#117FF5] hover:text-[#F6F7F9]">Log in</button>
                <button className="px-4 py-2 rounded-full duration-300 text-[#117FF5] hover:bg-[#117FF5] hover:text-[#F6F7F9]">Become Agent</button>
            </div>
            <div id="menu_mobile" className="hidden">
                <div id="mobile_navbar" className=""></div>
                <div id="mobile_login" className=""></div>
            </div>
        </div>
    )
}
