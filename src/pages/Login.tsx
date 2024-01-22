import { Button } from "primereact/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SignIn } from "../services/Login.service";

export function Login() {

    const [loading, setLoading] = useState<boolean>(false)

    const { register, formState:{errors}, handleSubmit } = useForm();

    const onSubmit = (event: React.SyntheticEvent) => {

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
            <div className="flex rounded-2xl shadow-lg max-w-5xl items-center  dark:bg-gray-800 dark:border-gray-700">
                <div className="md:w-1/2 px-16 py-6">
                    <h2 className="font-bold text-2xl text-gray-900 dark:text-white">Sign in to your account</h2>

                    <form className="flex flex-col gap-4 mt-7" method="post" onSubmit={handleSubmit(() => onSubmit)} >
                        <div className="relative">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User</label>
                            <input type="text" id="username" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoFocus placeholder="name@company.com" autoComplete="off" 
                            { ...register("username",{ minLength:12, required:true, pattern:/^[\w-_]+(\.[\w!#$%'*+\/=?\^`{|}]+)*@((([\-\w]+\.)+[a-zA-Z]{2,20})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$/i }) }/>{
                                errors.username?.type==="required" &&(
                                    <p className="absolute text-sm font-medium text-red-500">Llena la vaina bien.</p>
                                )                                
                            }{
                                errors.username?.type == "pattern" &&(
                                    <p className="absolute text-sm font-medium text-red-500">El formato de correo no es valido</p>
                                )                                
                            }
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            { ...register("password",{required:true}) }/>{
                                errors.password?.type==="required" &&(
                                    <span className="absolute text-sm font-medium text-red-500">Llena eso y no seas haragan.</span>
                                )                                
                            }
                        </div>
                        <Button 
                        type="submit" 
                        label="Sign In"
                        loading={loading} 
                        className="mt-2 w-full text-white bg-primary-600 hover:bg-primary-700 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"/>
                    </form>

                </div>
                <div className="md:block hidden w-1/2">
                    <img className="rounded-r-2xl" src="../public/images/banco.png" alt="" /> 
                </div>
            </div>
        </section>
    )
}