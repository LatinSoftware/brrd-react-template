
import { useRouteError } from "react-router-dom"


type RouterErrorType = {
    statusText: string, message: string
}

export function NotFoundPage(){

    const error = useRouteError() as RouterErrorType;
    console.error(error)

    return (
        <div>
            <h1>Opps!</h1>
            <p>Sorry, an unexpected error has occurred!</p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    )
}