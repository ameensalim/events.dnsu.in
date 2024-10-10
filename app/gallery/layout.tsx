import { title } from 'process';
import React from 'react'

export const metadata = {
    title: "Gallery | National conference | Darunnoor Kashipatna",
    description: "October 10 - Darunnoor Education Centre Kashipatna, Moodbidri - Karnataka",
}   

function layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    )
}

export default layout