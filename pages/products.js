import Head from "next/head";

const items = [
  {
    name: "Virgin Coconut Oil (VCO)",
    description:
      "Non-heated extracted oil from coconut that is planted in Semeru volcanic mountain area. VCO is recently being famous due to beneficial for health, cosmetic and medical treatment",
    src: "/vco-1.png",
  },
  {
    name: "Coconut Husk",
    description:
      "Fairly outer shell of coconut. Mainly used for plant growing medium.",
    src: "/coconut-husk-1.jpg",
  },
  {
    name: "Charcoal coconut briquet",
    description:
      "Compressed coconut shell charcoal powder under high mechanical pressure method. Commonly used for sisha, hookah burner or barbeque grill.",
    src: "/charcoal-coconut-briquete.jpg",
  },
  {
    name: "Cocopeat",
    description:
      "Last small size of coconut coir that is frequently utilized for plant growing medium. It has high absorbent capability.",
    src: "/cocopeat.png",
  },
  {
    name: "Broken coconut shell",
    description:
      "Shell of coconut that is reformed into specific size as per costumer requirement. Can be us for an art work as well as barbeque grill.",
    src: "/broken-coconut-shell.jpg",
  },
  {
    name: "Coconut and Palm sugar",
    description:
      "Extracted from coconut trees. It is an organic, low glycemic, pure and unrefined. Palm sugar can also be provided upon costumer’s request.",
    src: "/palm-sugar-1.png",
  },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Treescoco | Products</title>
        <meta name="keywords" content="virgin coconut oil tangerang selatan" />
      </Head>
      <div>
        <div className="flex flex-col items-center my-2 py-14">
          <h1 className="lg:text-5xl text-gray-500 md:text-4xl">Our Products</h1>
          <hr className="w-32 border-t-4 border-green-900 border-opacity-50" />
        </div>
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {items.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={callout.src}
                        alt={callout.name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
