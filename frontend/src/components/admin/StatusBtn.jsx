"use client";
import { axiosInstance, showToast } from '@/src/library/helper';
import React from 'react'

export default function StatusBtn({ current_status, id, module_url }) {
    const [status, setStatus] = React.useState(current_status);

    const handleStatus = () => {
        console.log(`${module_url}/change-status/${id}/${!status}`)
        axiosInstance.patch(`${module_url}/change-status/${id}/${!status}`)
            .then(
                (response) => {
                    if (response.data.flag == 1) {
                        setStatus(!status);
                    }
                    showToast(response.data.flag, response.data.message);
                }
            ).catch(
                (error) => {
                    showToast(0, error.message);
                }
            )
    }
    return (
        <>
            {
                status == true ?
                    <button onClick={handleStatus} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 w-[80px] rounded">Active</button>
                    : <button onClick={handleStatus} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2  w-[80px] rounded">Inactive</button>
            }
        </>
    )
}
