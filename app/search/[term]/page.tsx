import React from 'react'

type Props ={
    params :{
        term:string
    }
}
const page = ({params:{term}}:Props) => {
const termSpaceRemover =decodeURIComponent(term)
   
  return (
    <div>
      {termSpaceRemover}
    </div>
  )
}

export default page
