import Link from 'next/link'
import React from 'react'

const page = () => {
  setTimeout(() => console.log("working"), 2000)

  return (
    <div style={{height: "90vh"}}>
      settings inside dashboard
      <Link href = {`/dashboard/settings/${1}`}> one </Link>
      <Link href = {`/dashboard/settings/${2}`}> two </Link>
      <Link href = {`/dashboard/settings/${3}`}> three </Link>
      <Link href = {`/dashboard/settings/${4}`}> four </Link>
    </div>
  )
}

export default page
