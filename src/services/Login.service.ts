import { Post } from "../adapters/http.adapter";
import { Login, LoginResponse } from "../interfaces/Login.interface";


export async function SignIn(login: Login): Promise<LoginResponse> {
    const data = await Post<Login, LoginResponse>({ url: "login", data: login })
    return data
}