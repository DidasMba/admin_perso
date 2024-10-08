/** @format */


import React from "react";
import Sidebar from "../_components/Sidebar";
import Header from "../_components/Header";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen w-full flex'>
            <Sidebar />
            <div className='flex-1'>
                <Header />
                <div className='overflow-y-auto'>{children}</div>
            </div>
        </div>
    );
};

export default AdminLayout;