import Link from 'next/link'
import React from 'react'

export default function StudentList() {
  return (
    <div>StudentList
    <div>
        <ul>
            <Link href="/studentlst/emmanuel">emmanuel </Link> <br></br>
            <Link href="/studentlst/saleem">saleem </Link> <br></br>
            <Link href="/studentlst/moon">moon </Link><br></br>
        </ul>
    </div>
    
    </div>
  )
}
