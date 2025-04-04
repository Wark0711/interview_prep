import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div className="root-layout">
            <nav className="flex">
                <Link href={'/'} className="flex items-center gap-2">
                    <Image src={'/logo.svg'} alt="logo" width={38} height={32} />
                    <h2 className="text-primary-100">WDT Interview Prep</h2>
                </Link>
            </nav>

            {children}
        </div>
    )
}