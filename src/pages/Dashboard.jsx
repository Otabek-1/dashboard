import React from "react";
import SwiperMainbar from "../componens/SwiperMainbar";
import SwiperCard from "../componens/SwiperCard";
import Charts from "../componens/Charts";
// import GlassEffect from "../componens/ddd";

export default function Dashboard() {
    return (
        <div className="bg-[#f8f8f8] min-h-[90vh] p-8">
            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-3 flex flex-col gap-8">
                    <div>
                        <SwiperMainbar />
                    </div>
                    <div> <SwiperCard /> </div>
                </div>
                <div className="col-span-1"><Charts/></div>
            </div>
        </div>
    )
}