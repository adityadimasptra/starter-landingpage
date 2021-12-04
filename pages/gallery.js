import Head from "next/head";
import Image from "next/image";

const gallery = [
  [
    { name: "vco1", src: "/vco-1.jpg" },
    { name: "vco2", src: "/vco-2.jpg" },
    { name: "coconutHusk1", src: "/coconut-husk-1.jpg" },
  ],
  [
    { name: "coconutHusk2", src: "/coconut-husk-2.jpg" },
    { name: "charcoalCoconutBriquet", src: "/charcoal-coconut.jpg" },
    { name: "cocopeat", src: "/cocopeat.jpg" },
  ],
  [
    { name: "brokenCoconutShell", src: "/broken-coconut.jpg" },
    { name: "coconutAndPalmSugar", src: "/palm-sugar-2.jpg" },
    { name: "coconutAndPalmSugar", src: "/palm-sugar-1.jpg" },
  ],
];

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Treescoco | Gallery</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <div className="flex flex-col items-center my-2 py-14">
          <h1 className="text-5xl text-gray-500">Gallery</h1>
          <hr className="w-20 border-t-4 border-green-900 border-opacity-50" />
        </div>
        <div
          className="my-8 grid lg:mx-60 md:mx-20 sm:mx-10 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-x-2 gap-y-2 "
          id="hero"
        >
          <div className="mx-auto grid grid-cols-1 gap-y-2 hover:z-10">
            <Image
              className="gallery-item rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
              src="/background-5.jpg"
              width={6000}
              height={4000}
              objectFit="cover"
              alt=""
            />
            <Image
              className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
              src="/charcoal-coconut.jpg"
              width={120}
              height={86}
              objectFit="cover"
              alt=""
            />
            <Image
              className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
              src="/coconut-husk-1.jpg"
              width={4000}
              height={2248}
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="mx-auto grid grid-cols-1 gap-y-2 hover:z-10">
            <Image
              className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
              src="/coconut-husk-2.jpg"
              width={2240}
              height={4000}
              objectFit="cover"
              alt=""
            />
            <Image
              className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
              src="/vco-2.jpg"
              width={3376}
              height={6000}
              objectFit="cover"
              alt=""
            />
            <Image
              className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
              src="/coconut-sugar-2.jpg"
              width={6000}
              height={3376}
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="mx-auto grid grid-cols-1 gap-y-2 hover:z-10">
            <Image
              className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
              src="/palm-sugar-1.jpg"
              width={6000}
              height={3376}
              objectFit="cover"
              alt=""
            />
            <Image
              className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
              src="/background-3.jpg"
              width={6000}
              height={3376}
              objectFit="cover"
              alt=""
            />
            <Image
              className="rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
              src="/background-2.jpg"
              width={6000}
              height={3376}
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
