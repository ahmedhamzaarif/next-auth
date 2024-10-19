import {NextRequest} from 'next/server'
import jwt from 'jsonwebtoken'

type DecodedToken = {
    id: string
}
export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || ""        
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as DecodedToken
        return decodedToken?.id

    } catch (error) {
        const err = error as Error;
        throw new Error(err.message)
    }
}