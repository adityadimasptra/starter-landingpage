import Head from "next/head";

const gallery = [
  { name: "vco1", src: "/vco-1.jpg" },
  { name: "vco2", src: "/vco-2.jpg" },
  { name: "coconutHusk1", src: "/coconut-husk-1.jpg" },
  { name: "coconutHusk2", src: "/coconut-husk-2.jpg" },
  { name: "charcoalCoconutBriquet", src: "/charcoal-coconut.jpg" },
  { name: "cocopeat", src: "/cocopeat.jpg" },
  { name: "brokenCoconutShell", src: "/broken-coconut.jpg" },
  { name: "coconutAndPalmSugar", src: "/coconut-sugar-2.jpg" },
  {
    name: "coconutAndPalmSugar",
    src: "/palm-sugar-1.jpg",
  },
];

const Gallery = () => {
  return (
    <>
    <Head>
      <title>Domain | Gallery</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <div className="flex flex-col items-center my-2 py-14">
        <h1 className="text-5xl text-gray-500">Gallery</h1>
        <hr className="w-20 border-t-4 border-green-900 border-opacity-50"/>
      </div>
      <div className="my-8 grid lg:mx-60 md:mx-20 sm:mx-10 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-x-2 gap-y-2 " id="hero">
        <div className="mx-auto grid grid-cols-1 gap-y-2 hover:z-10">
          <img className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full object-cover" src="./background-1.jpg" alt="" />
          <img className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full object-cover" src="./background-7.jpg" alt="" />
          <img className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full object-cover" src="./background-2.jpg" alt="" />
        </div>
        <div className="mx-auto grid grid-cols-1 gap-y-2 hover:z-10">
          <img className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full object-cover" src="./background-2.jpg" alt="" />
          <img className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full object-cover" src="./background-5.jpg" alt="" />
          <img className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full object-cover" src="./background-6.jpg" alt="" />
        </div>
        <div className="mx-auto grid grid-cols-1 gap-y-2 hover:z-10">
          <img className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full object-cover" src="./background-4.jpg" alt="" />
          <img className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full object-cover" src="./background-3.jpg" alt="" />
          <img className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full object-cover" src="./background-2.jpg" alt="" />
        </div>
      </div>
    </div>
  </>
   );
}
 
export default Gallery;
