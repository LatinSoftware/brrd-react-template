import React, { ReactNode, useState } from "react"
import { AuthApiUserModel } from "../interfaces/auth-service.interface"
import { jwtDecode } from "jwt-decode"

const UserContext = React.createContext({})

type Props = {
    children: ReactNode
}

export interface UserGlobalState {
    isLogged: boolean,
    token?: string
    userInfo?: AuthApiUserModel
}

export function UserContextProvider({ children }: Props) {

    const [userState, setUserState] = useState<UserGlobalState>(() => {

        const token = window.sessionStorage.getItem('authToken')
    
        if(!token) return {
            isLogged: false
        }
    
        const userInfo = jwtDecode(token) as AuthApiUserModel
    
        return {
            isLogged: true,
            token,
            userInfo
        }
    })

    return <UserContext.Provider value={{ userState, setUserState }}>
        {children}
    </UserContext.Provider>
}

export default UserContext