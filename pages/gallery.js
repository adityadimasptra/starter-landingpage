import Head from "next/head";
import Image from "next/image";

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
        <title>Treescoco | Gallery</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
      </div>
    </>
  );
};

export default Gallery;
