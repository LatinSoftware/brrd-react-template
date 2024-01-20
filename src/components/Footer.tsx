export function Footer() {
    return (

        <footer className="bg-white shadow  dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <strong>Desarrollador por:</strong> Gerencia de desarrollo Core Tesoreria y Subsidiarias
                </span>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://www.banreservas.com/" className="hover:underline">Banreservas</a>. Todos los derechos reservados
                </span>
            </div>
        </footer>



    )
}