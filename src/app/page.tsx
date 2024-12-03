import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
    
{/*hero section*/}
<section>
  <Image
  src={'/home.jpg'}
  alt='picture'
  width={750}
  height={2000}
  className='object-cover w-full h-full'/>
  <p className=' text-1xl mt-2'>STC is an innovator in the digital world,we help our clients identify new oppurtunities,lead change, and
    differentiate their brand. Our process is driven by data analysis coupled with adeep understanding
    of the customer experience.whether clients need digital marketing services or consultingthey come to us to present
    themseleves effectively in the digital arena 
  </p>
</section>
<Footer/>
<Header/>
<section className="text-gray-600   body-font">
  <div className="container mx-auto flex px-5    md:flex-row flex-col items-center">
    <div className="lg:flex-grow mt-1  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
   
      <p className=" mt-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ex itaque
         nulla totam fugit odio aspernatur hic commodi sequi dolor libero, expedita veniam laborum maxime impedit 
         doloribus nemo accusamus perspiciatis similique error ipsam a corporis natus consectetur? Aperiam sequi fugit, 
         consequatur voluptas deleniti eos aliquid excepturi nostrum tenetur soluta esse. Vitae sit, voluptatem tempora 
         eveniet sunt maiores ipsa modi consequuntur? Molestias non, expedita quae dolor maiores illum dolorum 
         voluptatem harum asperiores eligendi nihil deleniti, animi vero placeat! Vitae, beatae ipsum deserunt iure
          mollitia fuga labore nisi temporibus aliquid harum quaerat dolores veniam ducimus, alias porro deleniti amet, 
          quos officia quibusdam. Consequatur officia dolor labore! Minima perspiciatis ratione blanditiis minus
           consectetur itaque consequuntur impedit modi. Aut, doloremque nesciunt earum excepturi nisi, libero ea dolore 
        </p>
  
    </div>

     
    <div className="  lg:max-w-lg mt-2 lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover  rounded mt-2 " alt="hero" src="/proimage.jpg"
      height={300}
      width={300}
      />
    </div>
  </div>
  <p className='ml-12'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis laborum quas ut quisquam expedita ad officia
     esse iure exercitationem. Incidunt nostrum necessitatibus quas dicta voluptatum placeat voluptatibus quaerat natus 
     provident?</p>

     <ul className='ml-12 list-disc pl-5'>
      <li>Linux</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Java-script</li>
      <li>Dockers</li>
      <li>Kubernates</li>
     </ul>

<div className='flex justify-center items-center h-screen'>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/0x5mf8BUJZY?si=wFht0a7drLZp--Gu"
      title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share"  allowFullScreen
      className='max-w-full  w-full md:w-3/4 lg:w-2/3'></iframe>
     </div>
</section>
<Footer/>
<Header/>

<div className="flex flex-col py-4 gap-6">
      {/* First Section */}
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <Image 
          src="/portfolio.jpg" 
          alt="Image 1" 
          className="ml-10 sm:ml-0" 
          height={300} 
          width={300} 
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p>
              <strong>Why it`s special:</strong> Robby incorporates an interactive experience into his portfolio.
            </p>
            <p>
              <strong>What it`s about:</strong> If you associate portfolios with a dry list of facts, this portfolio might surprise you. Robby found a novel way of displaying what was otherwise dry information. He let oHe let out his portfolio site as a video game that the visitor can actually play. This incredibly fun interactive design portfolio will make you scroll.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <Image 
          src="/portfolio.jpg" 
          alt="Image 2" 
          className="py-4 ml-10 sm:ml-0" 
          height={300} 
          width={300} 
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p>
              <strong>Why it`s special:</strong> Robby incorporates an interactive experience into his portfolio.
            </p>
            <p>
              <strong>What it`s about:</strong> If you associate portfolios with a dry list of facts, this portfolio might surprise you. Robby foundfound a novel way of displaying what was otherwise dry information. He let out his portfolio site as a video game that the visitor can actually play. This incredibly fun interactive design portfolio will make you scroll.
            </p>
          </div>
        </div>
      </div>
    </div>
  
<Footer/>
<Header/>
<div className="flex flex-col items-center py-8 px-4">
  {/* Your Details Container */}
  <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Your Details</h2>
    <div className="flex flex-col gap-4">
      <label htmlFor="name" className="font-medium">Name:</label>
      <input
        type="text"
        id="name"
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Enter your name"
      />
      <label htmlFor="email" className="font-medium">Email:</label>
      <input
        type="email"
        id="email"
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Enter your email"
      />
    </div>
  </div>

  {/* Your Review Container */}
  <div className="w-full max-w-2xl bg-gray-100 p-6 mt-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Your Review</h2>
    <div className="flex flex-col gap-6">
      {/* First Question: How did you go to input us? */}
      <div className="flex flex-col">
        <label htmlFor="input-us" className="font-medium">How did you go to input us?</label>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Google</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">Other</button>
        </div>
      </div>

      {/* Second Question: Would you visit again? */}
      <div className="flex flex-col">
        <label htmlFor="visit-again" className="font-medium">Would you visit again?</label>
        <div className="flex gap-4">
          <div className="flex items-center">
            <input type="radio" id="yes" name="visit" value="yes" className="mr-2" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="no" name="visit" value="no" className="mr-2" />
            <label htmlFor="no">No</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="maybe" name="visit" value="maybe" className="mr-2" />
            <label htmlFor="maybe">Maybe</label>
          </div>
        </div>
      </div>

      {/* Comment Box */}
      <div className="flex flex-col">
        <label htmlFor="comment" className="font-medium">Additional Comments:</label>
        <textarea
          id="comment"
          rows={4}
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Leave your comment here"
        ></textarea>
      </div>

      {/* Email Update Checkbox */}
      <div className="flex items-center">
        <input type="checkbox" id="email-update" className="mr-2" />
        <label htmlFor="email-update" className="font-medium">Sign me up for email updates</label>
      </div>

      {/* Submit Review Button */}
      <div className="flex justify-center mt-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit Review</button>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
