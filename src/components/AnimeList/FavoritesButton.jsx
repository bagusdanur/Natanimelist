"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const FavoritesButton = ( {anime_mal_id, user_email, anime_image, anime_title} ) => {
    const [isCreated, SetIsCreated] = useState(false)
    const router = useRouter()
    const handleFavorites = async (event) => {
        event.preventDefault()

        
        const data = {anime_mal_id, user_email, anime_image, anime_title}
        const response = await fetch("/api/v1/favorites", {
            method: "POST",
            body: JSON.stringify(data)
            
        })
        const favorites = await response.json()
        if(favorites.isCreated) {
            SetIsCreated(true)
            router.refresh()
           
        }
        return  
       
    } 
  return  (
    <>
    {   
        isCreated ? <p className='text-color-primary flex justify-center items-center'>Berhasil Ditambahkan Ke Favorites</p>
        :<button onClick={handleFavorites} className="px-2 py-1 bg-color-accent rounded">Add Favorite</button>
    }
    
    
    </>
    
  )
}

export default FavoritesButton