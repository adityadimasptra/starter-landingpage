import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Treescoco</title>
        <meta name="keywords" content="domain" />
      </Head>
      <div>
        <div
          className="bg-fixed h-screen bg-cover bg-hero grid lg:grid-flow-col"
          id="hero"
        >
          <div className="mx-auto px-6 lg:px-8 flex items-center">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking font-extrabold text-green-50 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>{" "}
                <span className="block text-yellow-400 xl:inline">
                  online business
                </span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600  hover:bg-green-900 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-green-50 hover:bg-green-100 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center my-2 py-14">
          <h1 className="lg:text-4xl text-gray-500 md:text-4xl sm:text-4xl">
            Our Key Features
          </h1>
          <hr className="w-20 border-t-4 border-green-900 border-opacity-50" />
        </div>

        <section className="relative bg-blueGray-100">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-3/6 lg:max-w-max px-12 md:px-4 mr-auto ml-auto">
                <iframe
                  src="https://www.youtube.com/embed/lTRiuFIWV54"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>

              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-18 h-18 mb-5 shadow-lg rounded-full bg-white">
                          <Image
                            alt="..."
                            src="/quality.svg"
                            width="40"
                            height="40"
                            className=""
                          />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">Quality</h6>
                        <p className="mb-4 text-blueGray-500">
                          Providing best product from selected raw material,
                          good practice and sustainable process.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-18 h-18 mb-5 shadow-lg rounded-full bg-white">
                          <Image
                            alt="..."
                            src="/commitment.svg"
                            width="40"
                            height="40"
                            className=""
                          />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Commitment
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Delivering authentic natural substance for goods.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-18 h-18 mb-5 shadow-lg rounded-full bg-white">
                          <Image
                            alt="..."
                            src="/fairness.svg"
                            width="40"
                            height="40"
                            className=""
                          />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">Fairness</h6>
                        <p className="mb-4 text-blueGray-500">
                          Balancing fairly stake holder interest (farmer, small
                          medium enterprise, customer, etc.)
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-18 h-18 mb-5 shadow-lg rounded-full bg-white">
                          <Image
                            alt="..."
                            src="/partnership.svg"
                            width="40"
                            height="40"
                            className=""
                          />
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Partnership
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Friendship and equality relationship to all. Long
                          lasting partnership both to farmer and customer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="py-12 bg-gray-50" id="cta">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-green-900 font-semibold tracking-wide uppercase">
                Ready to dive in?
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
                Check our products list
              </p>
            </div>
            <div className="mt-5 text-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="cvo-product.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Products PDF
                </a>
              </div>
              <div className="ml-5 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
                >
                  Products Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
