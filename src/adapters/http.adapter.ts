import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 3000
})


interface Props<TData> {
    data: TData;
    url: string;
}

export async function Post<TData, TResponse>({ url, data }: Props<TData>): Promise<TResponse> {
    const response = await instance.post<TResponse>(url, data)
    return response.data
} 