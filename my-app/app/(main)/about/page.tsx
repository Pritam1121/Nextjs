import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div>
      <Link href={"/contact"}>Go to Contact</Link>
       <Image
      src="/undraw_loczation-search_9mdg.svg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
  )
}

export default AboutPage