import { Post } from "../adapters/http.adapter";
import { Login, LoginResponse } from "../interfaces/login.interface";


export async function LoginAsync(login: Login): Promise<LoginResponse> {
    const data = await Post<Login, LoginResponse>({ url: "auth", data: login })
    return data
}