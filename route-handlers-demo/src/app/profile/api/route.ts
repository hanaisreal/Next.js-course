import { type NextRequest } from "next/server";
// import {headers} from 'next/headers';

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    // const headerList = headers();

    const theme = request.headers.get('Cookie');
    console.log(requestHeaders.get('Authorization')); //put in the name of the header
    // console.log(headerList.get('Authorization')); //put in the name of the header
    console.log(theme);

    return new Response('<h1>Profile data<h1>',{
    headers: {
        'Content-Type': 'text/html',
        'set-cookie': 'theme=dark',
    },}
    );
}