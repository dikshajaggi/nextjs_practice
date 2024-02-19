import React from 'react'

const page = ({params}) => {
    console.log([params, "params"])
  return (
    <div  style={{height: "90vh", padding: "20px"}}>
      {params.id}
    </div>
  )
}

export default page
