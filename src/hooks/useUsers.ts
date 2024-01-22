import { useCallback, useContext, useState } from "react"
import { LoginAsync } from "../services/login.service"
import { Login } from "../interfaces/login.interface"
import UserContext from "../context/userContext"
import { jwtDecode } from "jwt-decode"
import { AuthApiUserModel } from "../interfaces/auth-service.interface"

export default function useUser() {

    const { userState,setUserState } = useContext(UserContext)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [token, setToken] = useState<string | null>(null)

    const login = useCallback(async ({ username, password }: Login) => {

        try {
            setLoading(true)
            setError(null)
            const { token } = await LoginAsync({ username, password })
            window.sessionStorage.setItem('authToken', token)

            const userInfo = jwtDecode(token) as AuthApiUserModel

            setUserState({
                isLogged: Boolean(token),
                token: token,
                userInfo
            })

            setToken(token)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            
            console.log(error)
            setError(error.message)

        } finally {
            setLoading(false)
        }


    }, [setUserState])

    const logout = useCallback(() => {
        setToken(null)
        window.sessionStorage.removeItem('authToken')
    }, [])

    return {
        isLogged: Boolean(token),
        error,
        loading,
        login,
        logout
    }
}