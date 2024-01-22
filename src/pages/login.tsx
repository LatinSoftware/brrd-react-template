import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { SubmitHandler, useForm } from "react-hook-form";
import { Login } from "../interfaces/login.interface";
import useUser from "../hooks/useUsers";



export function Login() {



    const {
        error,
        loading,
        login,
        isLogged
    } = useUser()


    const onSubmit: SubmitHandler<Login> = async ({username, password}) => {
        await login({ username, password })
    }

    const { register, formState: { errors }, handleSubmit } = useForm<Login>();

    const navigate = useNavigate()

    useEffect(() => {
        if (!isLogged) return

        navigate('/')

    }, [isLogged, navigate])

   

    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center p-10 ">
            <div className="flex rounded-2xl shadow-lg max-w-5xl items-center  dark:bg-gray-800 dark:border-gray-700">
                <div className="md:w-1/2 px-16 py-6">
                    <h2 className="font-bold text-2xl text-gray-900 dark:text-white">Iniciar Sesión</h2>
                    <form className="flex flex-col gap-4 mt-7" method="post" onSubmit={handleSubmit(onSubmit)} >
                        
                    {
                        error &&
                        <Message severity="error" text={error} />
                    } 
                        

                        <div className="relative">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de usuario</label>
                            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoFocus placeholder="domain user (ajramirez)" autoComplete="off"
                                {...register("username", { minLength: 1, required: true})}/>{
                                errors.username?.type === "required" && (
                                    <p className="absolute text-sm font-medium text-red-500">usuario requerido.</p>
                                )
                            }
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                            <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("password", { required: true })} />{
                                errors.password?.type === "required" && (
                                    <span className="absolute text-sm font-medium text-red-500">contraseña requerida</span>
                                )
                            }
                        </div>
                        <Button
                            type="submit"
                            label="Sign In"
                            loading={loading}
                            className="mt-2 w-full text-white bg-primary-600 hover:bg-primary-700 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" />
                            
                    </form>
                    

                </div>
                <div className="md:block hidden w-1/2">
                    <img className="rounded-r-2xl" src="../public/images/banco.png" alt="" />
                </div>
            </div>
        </section>
    )
}