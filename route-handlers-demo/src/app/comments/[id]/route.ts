import {comments} from '../data';
import {redirect} from 'next/navigation'

export async function GET(
    request: Request, 
    {params}: {params: {id: string}}) {
    const comment = comments.find((comment) => comment.id ===
    parseInt(params.id));
    if(parseInt(params.id) > comments.length){
        return redirect('/comments')
    }
    return Response.json(comment);
}

export async function PATCH(
    request: Request, 
    {params}: {params: {id: string}}) {
    const comment = await request.json();
    //find index of comment
    const index = comments.findIndex((comment) => comment.id ===
    parseInt(params.id));
    //change comment
    comments[index] = comment;
    return Response.json(comment);
}

export async function DELETE(
    request: Request, 
    {params}: {params: {id: string}}
    ) {
    //find index of comment
    const index = comments.findIndex((comment) => comment.id ===
    parseInt(params.id));
    //delete comment
    comments.splice(index, 1);
    return new Response(null, {status: 204});
}

