import Head from "next/head";
import Image from "next/image";

const dataGallery = [ 
  [
    { name: "vco1", src: "/vco-1.png", width: 1280, height: 1280},
    { name: "vco2", src: "/vco-2.png", width: 1280, height: 1280},
    { name: "coconutHusk1", src: "/coconut-husk-1.jpg", width: 1280, height: 1280}
  ],
  [
    { name: "coconutHusk2", src: "/coconut-husk-2.jpg", width: 1280, height: 1280},
    { name: "charcoalCoconutBriquet", src: "/charcoal-coconut-briquete.jpg", width: 1280, height: 1280},
    { name: "cocopeat", src: "/cocopeat.png", width: 1280, height: 1280}
  ],
  [
    { name: "brokenCoconutShell", src: "/broken-coconut-shell.jpg", width: 1280, height: 1280},
    { name: "coconutAndPalmSugar", src: "/palm-sugar-2.png", width: 1280, height: 1280},
    { name: "coconutAndPalmSugar", src: "/palm-sugar-1.png", width: 1280, height: 1280}
  ]
];

function ColumnGallery ({ props }) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-y-2 hover:z-10">
      {props.map((data, index) => (
        <Image
          className="gallery-item rounded-md cursor-pointer transition ease-in-out duration-400 transform hover:z-10 hover:-translate-y-1 hover:scale-95 h-full"
          src={data.src}
          width={data.width}
          height={data.height}
          objectFit="cover"
          blurDataURL={data.src}
          placeholder="blur"
          alt={data.name}
          key={index}
        />
      ))}
      
    </div>
  )
}

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Treescoco | Gallery</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <div className="flex flex-col items-center my-2 py-14">
          <h1 className="lg:text-5xl text-gray-500  ">Gallery</h1>
          <hr className="w-20 border-t-4 border-green-900 border-opacity-50" />
        </div>
        <div
          className="my-8 grid mx-10 lg:mx-48 md:mx-20 sm:mx-10 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-x-2 gap-y-2 "
          id="hero"
        >
          {dataGallery.map((data,index) => (
            <ColumnGallery props={data} key={index}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
