import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    
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
    
  )
}