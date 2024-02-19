import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <nav style={{ marginTop: "50px", backgroundColor: "purple", height: "50px"}}></nav>
      {children}
    </div>
  )
}

export default layout
