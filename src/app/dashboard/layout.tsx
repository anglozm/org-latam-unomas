import Sidebar from '@/components/layout/Sidebar'
import React from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="ml-0 md:ml-64 w-full p-6">{children}</main>
        </div>
    )
}
