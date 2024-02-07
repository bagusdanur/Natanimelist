"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const FavoritesDelete = ({ id }) => {

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const handleDelete = async () => {
    setIsLoading(true);
    const response =  await fetch(`/api/v1/favorites/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      setIsLoading(false);
      router.refresh()
    } else {
      alert('Error deleting favorite');
    }
  }

  return (
    <>
    {isLoading ? (
        <button disabled className='text-color-danger'>Deleting...</button>
      ) : (
        <button onClick={handleDelete} className='text-color-dark bg-color-accent px-2 rounded'>Hapus Favorites</button>
      )}
    </>
  )
}

export default FavoritesDelete