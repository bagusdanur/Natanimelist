import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import React from 'react'
import Link from 'next/link'
import Header from '@/components/Dashboard/Header'
import CommentDelete from '@/components/Dashboard/CommentDelete'

const page = async () => {
  const user = await authUserSession()
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } })

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Comment"} />
      <div className='grid md:grid-cols-2 grid-col-1 py-4 gap-4 '>

        {comments.map(comment => {
          return (
            <div key={comment.id}  className='bg-color-primary text-color-dark p-4 rounded relative'>
              <Link href={`/anime/${comment.anime_mal_id}`}>
              <div  className='flex flex-row gap-4 '>
                <p className='text-color-comment text-sm' >{comment.username} |</p>
                <p className='text-sm'>{comment.anime_title}</p>
              </div>
              <p className='italic'>{comment.comment}</p>
              </Link>
              <CommentDelete id={comment.id}/>
            </div>
          )
        })}
      </div>
    </section>

  )
}

export default page