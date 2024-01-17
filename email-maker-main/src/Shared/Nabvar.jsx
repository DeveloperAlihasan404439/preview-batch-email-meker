import { Link } from "react-router-dom";



const Nabvar = () => {

    const navOpctions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/inbox'>Inbox</Link></li>
        <li><Link to='/getEmail'>Get Email</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        
    </>
    return (
        <>
            <div className="navbar px-4 py-6 md:px-10 bg-slate-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOpctions}
                        </ul>
                    </div>
                    <div >
                          {/*   <a className="flex items-center justify-center" href=""><img className="w-10 md:w-14 rounded-full mr-2" src={logo} alt="" />
                         <h1 className="text-xl md:text-3xl font-semibold flex"> <span>Curious</span> <span className="text-teal-400">Mail</span></h1></a> */}
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOpctions}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                <button className="btn btn-sm md:btn-md text-xs md:text-lg bg-yellow-400 text-black  hover:text-white font-normal rounded-3xl">Premium</button>
                </div>
            </div>
        </>
    );
};

export default Nabvar;