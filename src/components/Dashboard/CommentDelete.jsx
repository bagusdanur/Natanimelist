"use client"
import "@/app/globals.css";
import Modal from 'react-modal';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash } from '@phosphor-icons/react/dist/ssr';


const CommentDelete = ({ id }) => {

    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = async () => {
        const response = await fetch(`/api/v1/comment/${id}`, {
            method: 'DELETE'
        })

        if (response.ok) {
           
            router.refresh()
        } else {
            alert('Error deleting favorite');
        }
    }

    return (
        <>
            <button onClick={() => setIsModalOpen(true)} className='text-color-danger absolute bottom-2 right-2'>
                        <Trash size={20} />
                    </button>
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={() => setIsModalOpen(false)}
                            style={{
                                overlay: {
                                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                content: {
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  backgroundColor: 'white',
                                  top: '50%',
                                  left: '50%',
                                  right: 'auto',
                                  bottom: 'auto',
                                  transform: 'translate(-50%, -50%)',
                                  padding: '20px',
                                  borderRadius: '10px',
                                  border: 'none'
                                }
                              }}
                        >
                            <h2 style={{ textAlign: 'center' }}>Yakin Ingin Menghapus comment ini?</h2>
                            <div className="modal-buttons" >
                                <button onClick={() => setIsModalOpen(false)} className="px-4">No</button>
                                <button onClick={handleDelete} className='text-color-danger px-4' >Yes</button>
                            </div>

                        </Modal>
        </>
    )
}

export default CommentDelete