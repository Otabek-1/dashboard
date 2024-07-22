
import { Avatar, Input, Typography } from "@material-tailwind/react";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { NotificationsMenu } from "./NotificationMenu";

export default function Navbar() {
    return (
        <div className="p-4 shadow-md w-[1430px] flex justify-between items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-3">
                <div className="w-72">
                    <Input
                        icon={<IoSearch />}
                        className="!border-gray-300 flex flex-row-reverse"
                        placeholder="Search Here"
                        type="search"
                        labelProps={{
                            className: 'hidden'
                        }}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Avatar src="https://picsum.photos/seed/picsum/200/300" alt="avatar" />
                    <div>
                        <Typography variant="h6">Leslie Alexander</Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                         🔥 Top lavel
                        </Typography>
                    </div>
                </div>
                <div>
                    <NotificationsMenu />
                </div>
            </div>
        </div>
    )
}
