import React from "react";

export default function Light(props){
    return(
            <div className="light">
                <div className="frame-around-circle">
                    <div className={props.class + " circle"}></div>
                </div>
            </div>
    );
}