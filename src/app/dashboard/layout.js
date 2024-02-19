import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <nav style={{display: "flex", justifyContent: "sapce-evenly", backgroundColor: "pink"}}>
            <span>home</span>
            <span>login</span>
        </nav>
      {children}
    </div>
  )
}

export default layout
