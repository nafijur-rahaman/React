import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {id}=useParams()
  return (
    <div className='bg-gray-200 text-center text-orange-700 py-4 font-bold'>
      User: {id}
    </div>
  )
}
