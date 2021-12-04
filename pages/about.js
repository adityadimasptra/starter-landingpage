import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>Treescoco | About</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <div className="flex flex-col items-center my-2 py-14">
          <h1 className="text-5xl text-gray-500">About</h1>
          <hr className="w-20 border-t-4 border-green-900 border-opacity-50" />
        </div>
      </div>
    </>
  );
}
 
export default About;