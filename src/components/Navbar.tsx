import { Button } from "primereact/button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext, { UserGlobalState } from "../context/userContext";
import { AuthApiUserModel } from "../interfaces/auth-service.interface";

export const NavbarComponent = () => {

    const { userState } = useContext(UserContext)
    const { userInfo } = userState as UserGlobalState
    const { Profiles, FullName } = userInfo as AuthApiUserModel

    return (
        <header>
            <nav className="max-w-screen-xl bg-white border-gray-200 dark:bg-gray-900 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/brrd_logo.png" className="w-12" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Application Name</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <div className="text-white flex flex-col justify-center items-center">
                            <span className="font-semibold">{FullName}</span>
                            <span className=" font-light text-sm  ">({Profiles.Name})</span>
                        </div>
                        <div>
                            <Button aria-label="logout" icon="pi pi-power-off" severity="danger" />
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-drow font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/samplepage1" className="text-gray-900 dark:text-white hover:underline">Sample page 1</Link>
                            </li>
                            <li>
                                <Link to="/samplepage2" className="text-gray-900 dark:text-white hover:underline">Sample page 2</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}