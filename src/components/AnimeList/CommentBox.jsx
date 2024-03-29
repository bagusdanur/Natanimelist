import { authUserSession } from '@/libs/auth-libs';
import prisma from '@/libs/prisma'
import React from 'react'
import CommentDelete from '../Dashboard/CommentDelete';

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
    const user = await authUserSession()
    


    return (
        <div className='grid md:grid-cols-4 grid-col-1 gap-4 mb-4'>
            {comments.length === 0 ? (
                <div className=" flex justify-center items-center p-4">Tidak ada komentar</div>
            ) : (
                comments.map(comment => {
                    const textColor = user?.name === comment.username ? 'text-color-comment' : 'text-color-score';
                    return (
                        <div key={comment.id} className="border p-3 rounded relative">
                            <p className={`${textColor}`}>@{comment.username}</p>
                            <p className=''>{comment.comment}</p>
                            { user?.name === comment.username ? <CommentDelete id={comment.id} /> : ""} 
                        </div>
                        
                    );
                })
            )}
        </div>
    )
}

export default CommentBox