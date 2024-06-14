import YouTubeLogo from "./YouTubeLogo"
export default function Navbar() {
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3">
            <div className="flex flex-row items-center gap-1 pl-4">
                <YouTubeLogo height="1.8rem" width="3rem"/>
                <span>Youtube</span>
            </div>
            <div id="flex justify-center intems-center ">
                <input className="w-full py-2 px-4 border border[#282828] rounded[1rem] bg-transparent" type="text" placeholder="Search" />
            </div>
            <div className="flex justify-end">
                <img className="w-8 h-8 rounded-full" src="https://api.dicebear.com/8.x/notionists/svg?seed=Yair" alt="user" />
            </div>
        </nav>
    )
} 