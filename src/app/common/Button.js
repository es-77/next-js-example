"use client"

import React from 'react'

export default function Button({price}) {
  return (
    <div>
        <button onClick={()=>alert(price)} >check price </button>
    </div>
  )
}
