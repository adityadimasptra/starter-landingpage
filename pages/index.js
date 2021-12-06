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
          <h1 className="text-5xl text-gray-500">About Us</h1>
          <hr className="w-20 border-t-4 border-green-900 border-opacity-50" />
        </div>

        <section className="relative bg-blueGray-100">
          {/* <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div> */}
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-full mb-6 bg-blueGray-700">
                  <Image
                    alt="..."
                    src="/cocopeat.jpg"
                    width={750}
                    height={500}
                    className="w-full h-full align-middle rounded-lg"
                  />
                  {/* <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Great for your awesome project
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Putting together a page has never been easier than
                      matching together pre-made components. From landing pages
                      presentation to login areas, you can easily customise and
                      built your pages.
                    </p>
                  </blockquote> */}
                </div>
              </div>

              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <Image
                            alt="..."
                            src="/quality.svg"
                            width="100"
                            height="100"
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
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <Image
                            alt="..."
                            src="/commitment.svg"
                            width="100"
                            height="100"
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
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <Image
                            alt="..."
                            src="/fairness.svg"
                            width="100"
                            height="100"
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
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <Image
                            alt="..."
                            src="/partnership.svg"
                            width="100"
                            height="100"
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

          {/* <div className="container mx-auto overflow-hidden pb-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-sitemap text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  CSS Components
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Every element that you need in a product comes built in as a
                  component. All components fit perfectly with each other and
                  can have different colours.
                </p>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Buttons
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Inputs
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Labels
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Menus
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Navbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Pagination
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Progressbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Typography
                  </span>
                </div>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                  target="_blank"
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  rel="noreferrer"
                >
                  View All{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </div>

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                  <img
                    alt="..."
                    src="/img/component-btn.png"
                    className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                  />
                  <img
                    alt="..."
                    src="/img/component-profile-card.png"
                    className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                  />
                  <img
                    alt="..."
                    src="/img/component-info-card.png"
                    className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                  />
                  <img
                    alt="..."
                    src="/img/component-info-2.png"
                    className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                  />
                  <img
                    alt="..."
                    src="/img/component-menu.png"
                    className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                  />
                  <img
                    alt="..."
                    src="/img/component-btn-pink.png"
                    className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center pt-32">
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                <div className="justify-center flex flex-wrap relative">
                  <div className="my-4 w-full lg:w-6/12 px-4">
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          Svelte
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          ReactJS
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          NextJS
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          JavaScript
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          Angular
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          Vue.js
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-drafting-compass text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Javascript Components
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  In order to create a great User Experience some components
                  require JavaScript. In this way you can manipulate the
                  elements on the page and give more options to your users.
                </p>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  We created a set of Components that are dynamic and come to
                  help you.
                </p>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Alerts
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Dropdowns
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Menus
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Modals
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Navbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Popovers
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Tabs
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                    Tooltips
                  </span>
                </div>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                  target="_blank"
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  rel="noreferrer"
                >
                  View all{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </div>
            </div>
          </div> */}
        </section>

        {/* CTA */}
        <div className="py-12 bg-gray-50" id="cta">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-green-900 font-semibold tracking-wide uppercase">
                Ready to dive in?
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Start your free trial today.
              </p>
            </div>
            <div className="mt-5 text-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Get started
                </a>
              </div>
              <div className="ml-5 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
