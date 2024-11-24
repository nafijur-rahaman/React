import React from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/nafijur-rahaman")
    //     .then(res=>res.json())
    //     .then(data =>{
    //         // console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data =useLoaderData()
  return (
    <div className='text-center bg-gray-600 py-5 text-white m-4'>

    Github followers: {data.followers}
    <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}



export const githubInfo = async ()=>{
  const response = await fetch("https://api.github.com/users/nafijur-rahaman")

  return response.json()
}