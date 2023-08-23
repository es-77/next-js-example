"use client"
import Link from 'next/link'
import {useRouter} from 'next/navigation'

export default function Page() {
    const router = useRouter();
  return (
    <>

    <div>page login</div>
    <div>
        <Link href="/"> go to home</Link>
    </div>
    <div>
        <button onClick={()=>router.push('/')}>go to home</button>
    </div>
    </>
  )
}

export function generateMetadata() { // Export generateMetadata function
  return {
      title: "font page title"
  }
}