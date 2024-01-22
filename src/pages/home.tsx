import { useContext } from "react"
import UserContext, { UserGlobalState } from "../context/userContext"
import { AuthApiUserModel } from "../interfaces/auth-service.interface"

export function Home() {

    const {userState } = useContext(UserContext)

    console.log(userState)
    const {userInfo} = userState  as UserGlobalState

    const { UserName, OfficeCode, Profiles, FullName }= userInfo as AuthApiUserModel

    return (
        <>
            <h1 className="text-4xl font-bold">Hola, {FullName}</h1>
            <h2 className="text-xl font-semibold ">Bienvenido a la aplicación</h2>
            <section className="p-4">
                <h3 className=" text-lg font-semibold ">Información de sesión</h3>
                <div className="flex flex-col gap-3 p-2 px-4 bg-gray-200 rounded-sm ">
                    <span>
                        <strong>Usuario:</strong> {UserName}
                    </span>
                    <span>
                        <strong>Perfil:</strong> {Profiles.Name}
                    </span>
                    <span>
                        <strong>Oficina:</strong> {OfficeCode}
                    </span>
                </div>
            </section>
        </>
    )
}