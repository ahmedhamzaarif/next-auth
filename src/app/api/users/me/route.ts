import {NextRequest, NextResponse} from 'next/server'
import { connect } from '@/dbConfig/dbConfig'
import { getDataFromToken } from '@/helpers/getDataFromToken'
import User from '@/models/userModel'

connect()

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findOne({_id: userId}).select("-password")
        
        if(!user) {
            return NextResponse.json({error: "Invalid Token"}, {status: 400})
        }

        return NextResponse.json({
            message: "User Found",
            success: true,
            data: user
        })
    } catch (error) {
        console.error('Error fetching user:', error);
        // Handle any unexpected errors
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }


}