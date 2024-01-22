import { Button } from "primereact/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SignIn } from "../services/Login.service";

export function Login() {

    const [loading, setLoading] = useState<boolean>(false)

    const { register, formState:{errors}, handleSubmit } = useForm();

    const onSubmit = (event: React.SyntheticEvent) => {

        console.log("Submit enviado");

        event.preventDefault()

        const target = event.target as typeof event.target & {
            username: { value: string };
            password: { value: string }
        }

        const username = target.username.value;
        const password = target.password.value;

        setLoading(true)
        try {
            
            SignIn({ username, password })
            
        } catch (error) {

            console.error(error)

        }finally{
            setLoading(false)
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="flex rounded-2xl shadow-lg max-w-3xl items-center  dark:bg-gray-800 dark:border-gray-700">
                <div className="md:w-1/2 px-16 py-6">
                    <h2 className="font-bold text-2xl text-gray-900 dark:text-white">Sign in to your account</h2>

                    <form className="flex flex-col gap-4 mt-7" method="post" onSubmit={handleSubmit(() => onSubmit)} >
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User</label>
                            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" autoComplete="off" 
                            { ...register("username",{ minLength:12, required:true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i }) }/>{
                                errors.username?.type==="required" &&(
                                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Llena la vaina bien.</p>
                                )                                
                            }{
                                errors.username?.type == "pattern" &&(
                                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">El formato de correo no es valido</p>
                                )                                
                            }
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            { ...register("password",{required:true}) }/>{
                                errors.password?.type==="required" &&(
                                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Llena eso y no seas haragan.</p>
                                )                                
                            }
                        </div>
                        <Button 
                        type="submit" 
                        label="Sign In"
                        loading={loading} 
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"/>
                    </form>

                </div>
                <div className="md:block hidden w-1/2">
                    <img className="rounded-r-2xl" src="../public/images/banco.png" alt="" /> 
                </div>
            </div>
        </section>
    )
}