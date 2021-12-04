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
      <div className="grid md:grid-flow-col" id="hero">
        <div className="mx-auto px-6 lg:px-8 flex items-center">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iusto corporis. In aspernatur possimus a! Quis temporibus magnam similique, aliquam, accusantium officiis voluptates rerum explicabo veritatis, dolorem deserunt enim accusamus?</h1>
        </div>
        <div className="mx-auto px-6 lg:px-8 flex items-center">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cumque tempore fuga quidem eius numquam, quos harum a dolorem iste labore minus! Rem hic et quidem vitae, culpa consectetur temporibus?</h1>
        </div>
        <div className="mx-auto px-6 lg:px-8 flex items-center">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cumque tempore fuga quidem eius numquam, quos harum a dolorem iste labore minus! Rem hic et quidem vitae, culpa consectetur temporibus?</h1>
        </div>
      </div>
    </div>
  </>
   );
}
 
export default Gallery;
