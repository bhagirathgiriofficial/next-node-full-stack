"use client";
import { axiosInstance, showToast } from '@/src/library/helper';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaTrash } from 'react-icons/fa'

export default function DeleteBtn({ id, module_url}) {
    const router = useRouter();
    const deleteHandler = () => {
        axiosInstance.delete(module_url + "/delete/" + id)
        .then(
            (response) => {
                if(response.data.flag == 1) {
                    router.refresh();
                }
                showToast(response.data.flag, response.data.message);
            }
        ).catch(
            (error) => {
                console.log(error.message);
            }
        )
    }

    return (
        <button onClick={deleteHandler} className="text-red-500 hover:text-red-700"><FaTrash /></button>
    )
}
