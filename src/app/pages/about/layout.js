"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Layout({
children
}){
    const pathname = usePathname(); 
    console.log(">>>>>>>>",pathname);
    return(
        <>

            <div>
                {pathname != "/pages/about/teacher"? <ul>
                    <li>
                        <Link href="/pages/about/aboutDev"> to about dev</Link>
                    </li>
                    <li>
                        <Link href="/pages/about/aboutDevop"> to about Dev op</Link>
                    </li>
                    <li>
                        <Link href="/pages/about/teacher"> go to teacher</Link>
                    </li>
                </ul>:null}
            </div>
            {children}
        </>
    )
}