import { Link } from "react-router-dom";

export const NavbarComponent = () => {
    return (
        <header>
            <nav className="max-w-screen-xl bg-white border-gray-200 dark:bg-gray-900 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/brrd_logo.png" className="w-12" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Application Name</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Username</a>
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