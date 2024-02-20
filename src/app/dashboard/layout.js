import Link from 'next/link'
import React from 'react'

const layout = ({children, admin, user}) => {
  return (
    <div>
        <nav style={{display: "flex", justifyContent: "space-between", backgroundColor: "pink", height: "40px"}}>
            <span style={{marginLeft: "10px"}}>Logo</span>
            <div style={{display: "flex", justifyContent: "space-evenly", width: "60%"}}>
                <Link href ="/" scroll={false}>Home</Link>
                <span>Login</span>
                <span>About</span>
                <span>Contact</span>
                <Link href ="/dashboard/settings">Settings</Link>
            </div>
        </nav>
      {children}
      <div>{admin}</div>
      <div>{user}</div>
    </div>
  )
}

export default layout
