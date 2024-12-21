import DeleteBtn from "@/src/components/admin/DeleteBtn";
import PageHeader from "@/src/components/admin/PageHeader";
import StatusBtn from "@/src/components/admin/StatusBtn";
import { getCategories } from "@/src/library/apis-calls";
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const CategoryList = async () => {
    const data = await getCategories();
    const categories = data.categories;
    const breadcrumb = [
        { text: "Dashboard", link: "/admin-panel" },
        { text: "Category List", link: null }
    ];
    return (
        <div className="container mx-auto p-6 min-h-screen">
            <PageHeader breadcrumb={breadcrumb} buttonText={"Add Category"} buttonLink={"/admin-panel/category/add"} />
            <div className='p-2 bg-white rounded-lg shadow-md'>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Index</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Slug</th>
                                <th className="py-3 px-6 text-left">Status</th>
                                <th className="py-3 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {categories.map((category, index) => (
                                <tr key={category._id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                                    <td className="py-3 px-6 text-left">{category.name}</td>
                                    <td className="py-3 px-6 text-left">{category.slug}</td>
                                    <td className="py-3 px-6 text-left">
                                        <StatusBtn current_status={category.status} id={category._id} module_url={process.env.NEXT_PUBLIC_CATEGORY_URL} />
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <button className="text-blue-500 hover:text-blue-700 mr-2"><FaEdit /></button>
                                        <DeleteBtn id={category._id} module_url={process.env.NEXT_PUBLIC_CATEGORY_URL}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
