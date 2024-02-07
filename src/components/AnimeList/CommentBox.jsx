import { authUserSession } from '@/libs/auth-libs';
import prisma from '@/libs/prisma'
import React from 'react'
import CommentDelete from '../Dashboard/CommentDelete';

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
    const user = await authUserSession()
    


    return (
        <div className='grid grid-cols-4 gap-4 mb-4'>
            {comments.length === 0 ? (
                <div className="text-color-score flex justify-center items-center p-4">Tidak ada komentar</div>
            ) : (
                comments.map(comment => {
                    const textColor = user?.name === comment.username ? 'text-color-comment' : 'text-color-secondary';
                    return (
                        <div key={comment.id} className="bg-color-primary p-3 rounded relative">
                            <p className={`${textColor}`}>@{comment.username}</p>
                            <p>{comment.comment}</p>
                            { user?.name === comment.username ? <CommentDelete id={comment.id} /> : ""} 
                        </div>
                        
                    );
                })
            )}
        </div>
    )
}

export default CommentBox