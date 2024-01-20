export function Home() {
    return (
        <>
            <h1 className="text-4xl font-bold">Hola, user name</h1>
            <h2 className="text-xl font-semibold ">Bienvenido a la aplicación</h2>
            <section className="p-4">
                <h3 className=" text-lg font-semibold ">Información de sesión</h3>
                <div className="flex flex-col gap-3 p-2 px-4 bg-gray-200 rounded-sm ">
                    <span>
                        <strong>Usuario:</strong> nombre usuario
                    </span>
                    <span>
                        <strong>Perfil:</strong> nombre usuario
                    </span>
                    <span>
                        <strong>Oficina:</strong> nombre usuario
                    </span>
                </div>
            </section>
        </>
    )
}