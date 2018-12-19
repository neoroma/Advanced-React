import React from 'react'
import Link from 'next/link'

export const Page = () => (
  <div>
    <p> Hi all, this is second page here</p>
    <Link href="/">
      <a>back to home page</a>
    </Link>
  </div>
)

export default Page
