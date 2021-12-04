import Head from "next/head";
import Image from "next/image";

const items = [
  {
    name: "Virgin Coconut Oil (VCO)",
    description:
      "Non-heated extracted oil from coconut that is planted in Semeru volcanic mountain area. VCO is recently being famous due to beneficial for health, cosmetic and medical treatment",
    src: "/vco-1.jpg",
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
    src: "/charcoal-coconut.jpg",
  },
  {
    name: "Cocopeat",
    description:
      "Last small size of coconut coir that is frequently utilized for plant growing medium. It has high absorbent capability.",
    src: "/cocopeat.jpg",
  },
  {
    name: "Broken coconut shell",
    description:
      "Shell of coconut that is reformed into specific size as per costumer requirement. Can be us for an art work as well as barbeque grill.",
    src: "/broken-coconut.jpg",
  },
  {
    name: "Coconut and Palm sugar",
    description:
      "Extracted from coconut trees. It is an organic, low glycemic, pure and unrefined. Palm sugar can also be provided upon costumer’s request.",
    src: "/palm-sugar-1.jpg",
  },
];

function ItemList({ item }) {
  return (
    <li className="py-4 flex">
      <img className="h-20 w-20 rounded-full" src={item.src} alt={item.name} />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{item.name}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    </li>
  );
}

export default function Products() {
  return (
    <>
      <Head>
        <title>Treescoco | Products</title>
        <meta name="keywords" content="domain" />
      </Head>
      <div>
        <ul className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <ItemList key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
