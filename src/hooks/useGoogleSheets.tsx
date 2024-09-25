import {google} from "googleapis";

export interface GoogleSheetOptions{
    sheet: string,
    firstRow?: number
    firstColumn?: string,
    sheetId?: string
}

/**
 * Generate google style sheet range from provided options.
 * TODO: This will not work where fields range beyond the last letter of the alphabet and multiple letters have to be used
 * @param options
 * @param fieldCount
 */
function generateRange(options: GoogleSheetOptions, fieldCount: number):string{
    let firstCol = options.firstColumn ?? "A"
    let firstColCharCode = firstCol.charCodeAt(0)
    let lastColCharCode = firstColCharCode + fieldCount - 1
    let lastCol = String.fromCharCode(lastColCharCode)
    let firstRow = options.firstRow ?? 1

    return `${options.sheet}!${firstCol}${firstRow}:${lastCol}`
}

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n') ?? "",
    },
    scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
    ],
});

const sheets = google.sheets({
    auth,
    version: 'v4',
});

export function useGoogleSheets(options: GoogleSheetOptions) {
    const append = async (row: any[]) => {
        const range = generateRange(options, row.length)

        return await sheets.spreadsheets.values.append({
            spreadsheetId: options.sheetId,
            range: range,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [row]
            },
        })
    }

    return {append}
}
