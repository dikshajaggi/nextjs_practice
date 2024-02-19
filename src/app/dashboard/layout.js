import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <nav style={{display: "flex", justifyContent: "space-between", backgroundColor: "pink", height: "40px"}}>
            <span style={{marginLeft: "10px"}}>Logo</span>
            <div style={{display: "flex", justifyContent: "space-evenly", width: "60%"}}>
                <span>Home</span>
                <span>Login</span>
                <span>About</span>
                <span>Contact</span>
            </div>
        </nav>
      {children}
    </div>
  )
}

export default layout
