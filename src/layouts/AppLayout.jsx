import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componens/Navbar"
import { Sidebar } from "../componens/Sidebar";

export default function AppLayout() {
    return (
        <div className="flex h-screen overflor-scroll">
            <Sidebar />
            <div>
                <div>
                <Navbar />
                </div>
                <div className="h-[90vh] overflow-y-scroll">
                <Outlet />
                </div>
            </div>
        </div>

    )
}