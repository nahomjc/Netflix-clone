import { notFound } from 'next/navigation'
import React from 'react'

type Props ={
    params :{
        term:string
    }
}
const page = ({params:{term}}:Props) => {
    if(!term) notFound()
const termSpaceRemover =decodeURI(term)
   
  return (
    <div>s
      {termSpaceRemover}
    </div>
  )
}

export default page
