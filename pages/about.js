import Head from 'next/head'
import Image from 'next/image'
const About = () => {
  return (
    <>
      <Head>
        <title>Treescoco | Contact Us</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <div className="flex flex-col items-center my-2 py-14">
          <h1 className="lg:text-5xl text-gray-500">Contact Us</h1>
          <hr className="w-20 border-t-4 border-green-900 border-opacity-50" />
        </div>
        <div className="grid mx-4 lg:mx-10 lg:grid-cols-2 md:grid-cols-1">
          <div className="md:w-screen md:h-screen md:max-h-full md:max-w-full">
            <iframe className="w-screen h-screen max-h-full max-w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6377356071334!2d106.70389751527631!3d-6.311230663520516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e52b5a1453e1%3A0x193e8a87dc2383f6!2sSerpong%20Green%20Park%20Blok%20S!5e0!3m2!1sen!2sid!4v1638813944745!5m2!1sen!2sid" loading="lazy"></iframe>
          </div>
          <div className="flex flex-col justify-center md:mx-10 sm:mx-5 xs:mt-10 ">
            <h1 className="text-2xl text-gray-500">Address:</h1>
            <hr className="w-60"/>
            <a className="my-4 blink-1" target="_blank" href="https://goo.gl/maps/QokhqnCmRnKXGWxx7" rel="noopener noreferrer">
              Serpong Green Park Blok S16, Ciputat - Tangerang Selatan, Banten, Indonesia.
            </a>
            <h1 className="mt-5 text-2xl text-gray-500">Our Contacts:</h1>
            <hr className="w-60"/>
            <div className="my-4 flex flex-col">
              <a className="blink-1 my-2" target="_blank" href="https://wa.me/6281553176532" rel="noopener noreferrer">
                +62 815-5317-6532
              </a> 
              <a className="blink-1 my-2" target="_blank" href="https://wa.me/6281332693518" rel="noopener noreferrer">
                +62 813-3269-3518
              </a> 
            </div>
            <h1 className="mt-5 text-2xl text-gray-500">Emails:</h1>
            <hr className="w-60"/>
            <div className="my-4 flex flex-col">
              <a className="blink-1 my-2" target="_blank" href="https://wa.me/6281332693518" rel="noopener noreferrer">
                example1@gmail.com
              </a> 
              <a className="blink-1 my-2" target="_blank" href="https://wa.me/6281332693518" rel="noopener noreferrer">
                example2@gmail.com
              </a> 
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
 
export default About;