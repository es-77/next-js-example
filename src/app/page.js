 "use client"

import Link from "next/link";
import { useState } from "react";

import { Roboto } from "next/font/google";
import Script from "next/script";

const roboto = Roboto({
  weight:'100',
  subsets:["latin"],
  display:"swap"
});

export default function Home() {
  const [name,setName] = useState('next js');
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Script src="/location.js"/>
    <div>
      <Link href="/login" > go to login page</Link>
    </div>
      hello world {name}
      <Test father="saleem"/>
      <Button setName={setName}/>
    </main>
    <div> 
      hello world
    </div>
    <div>
      {/* <h1 style={{ fontFamily:'roboto', fontWeight:100}}>
        hello page font
      </h1> */}
      <h1 className={roboto.className}>
        hello page font
      </h1>
    </div>
    </>
  )
}

const Test=(props) =>{
  return(
    <div>
      <p>
      Emmanuel { props?.father }
      </p>
    </div>
  );
}

const Button=(props)=>{ 
  const fun = (data)=>{
    props?.setName('next level next js');
    alert(data);
  }

  const NextButton=()=>{
    return(
      <div>
        <button>
          button inner commponet button
        </button>
      </div>
    );
  }
  return(
    <div>
      <button onClick={()=>fun('emmanuelsaleem')}>
        click me
      </button>
      <NextButton/>
    </div>
  );
}

export function generateMetadata({params}){
  return{
    title:"font page title"
  }
}
