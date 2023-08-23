export default function EnvFiles() {
    console.log(process.env.DB_HOST)
    console.log(process.env.DB_HOST)
  return (
    <>
    {/* //development */}


        {/* {console.log(process.env.NODE_ENV)} */}
        <div>EnvFiles {process.env[DB_HOST]}</div>
    </>
  )
}
