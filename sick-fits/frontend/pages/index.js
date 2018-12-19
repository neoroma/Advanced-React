import React from 'react'
import Link from 'next/link'

export const Page = () => (
  <div>
    <p>Hi all</p>
    <Link href="/second">
      <a>to second</a>
    </Link>
  </div>
)

export default Page
