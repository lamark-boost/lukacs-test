import {NextRequest, NextResponse} from 'next/server'
import {useGoogleSheets} from "@/src/hooks/useGoogleSheets";

export async function POST(req: NextRequest) {
    
    const sheetName = function () {
        //hardcode for now
        return 'Sheet1';
    }

    const { append } = useGoogleSheets({
        firstRow: 1,
        sheetId: process.env.SHEET_ID ?? "",
        sheet: sheetName() ?? "Sheet1"
    })

    const json = await req.json();

    //too big data and sheets save will fail
    delete json['captcha'];
    
    try {
        
        const toAppend = Object.values(json)
        await append(toAppend)

        const nextResponse = NextResponse.json({success: true}, {status: 200})
        
        return nextResponse
    } catch (e: any) {
        
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }
}
