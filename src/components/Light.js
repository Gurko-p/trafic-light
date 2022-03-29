import React from "react";

export default function Light({state}){
    return(
            <div className="light">
                <div className="frame-around-circle">
                    <div className={`${state} circle`}></div>
                </div>
            </div>
    );
}