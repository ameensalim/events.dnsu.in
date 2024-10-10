import { Metadata } from 'next';
import React from 'react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl!),
    title: "Gallery | National Conference | Darunnoor Kashipatna",
    description: "October 10 - Darunnoor Education Centre Kashipatna, Moodbidri - Karnataka",
    openGraph: {
        images: ['/images/banner.jpg'],
    },
    twitter: {
        images: ['/images/banner.jpg'],
    },
};

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