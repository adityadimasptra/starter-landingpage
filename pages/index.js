import Head from 'next/head'
import Image from 'next/image'

const supported = [
  {name: 'Youtube', src: '/youtube-logo.png'},
  {name: 'Adobe', src: '/adobe.png'},
  {name: 'Microsoft', src: '/microsoft.png'},
  {name: 'Kominfo', src: '/kominfo.png'}
]
export default function Home() {
  return (
    <>
      <Head>
        <title>Domain</title>
        <meta name="keywords" content="domain"/>
      </Head>
      <div>
        
        <div className="bg-fixed h-screen bg-cover bg-hero grid lg:grid-flow-col" id="hero">
          <div className="mx-auto px-6 lg:px-8 flex items-center">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking font-extrabold text-green-50 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>{' '}
                <span className="block text-yellow-400 xl:inline">online business</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
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

        <div className="py-14 flex justify-center text-cente mx-48" id="certificate">
          {supported.map((item, index) => (
              <Image className="w-20 object-contain mx-5" key={index} src={item.src} alt={item.name}/>
          ))}
        </div>

        {/* CTA */}
        <div className="py-12 bg-gray-50" id="cta">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Ready to dive in?</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Start your free trial today.
              </p>
            </div>
            <div className="mt-5 text-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
              <div className="ml-5 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
