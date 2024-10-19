import {NextResponse} from 'next/server'
import { connect } from '@/dbConfig/dbConfig'

connect()

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successfully",
            success: true
        })

        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })

        return response
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({error: err.message}, {status: 500})
    }

}