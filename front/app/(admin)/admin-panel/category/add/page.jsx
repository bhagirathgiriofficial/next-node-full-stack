"use client";
import PageHeader from '@/components/admin/PageHeader';
import { showToast } from '@/library/helper';
import React from 'react';
import { toast } from 'react-toastify';

const AddCategory = () => {
    const breadcrumb = [
        { text: "Dashboard", link: "/admin-panel" },
        { text: "Category List", link: "/admin-panel/category" },
        { text: "Add Category", link: null }
    ];



    const handleSubmit = (e) => {
        e.preventDefault();
        showToast(true, "Category added successfully");
        const name = e.target.name.value;
        const slug = e.target.slug.value;
        const data = {
            name,
            slug
        };
        console.log(data);
    }


    return (
        <div className="container mx-auto p-6 min-h-screen bg-gray-100">
            <PageHeader breadcrumb={breadcrumb} buttonText="Back to View" buttonLink="/admin-panel/category" />
            <div className="p-5 bg-white shadow-lg rounded-lg">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800">Add New Category</h2>
                </div>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                Category Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter category name"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="slug">
                                Category Slug
                            </label>
                            <input
                                type="text"
                                id="slug"
                                name="slug"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Enter category slug"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="shadow bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-6 rounded"
                        >
                            Add Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;