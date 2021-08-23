import React from "react";

export default function Area({title, children}) {
    return (
        <div>
            {title && <div className={"pb-2 mb-2 border-bottom fw-bold h5 mb-3"}>{title}</div>}
            {children}
        </div>
    );
}