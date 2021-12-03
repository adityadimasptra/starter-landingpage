
export default function Footer() {
  return (
    <div className="py-12 bg-green-800 text-white clear-both">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-2 inline-flex">
            <a
              href="https://www.instagram.com/adityadimasptra/"
              target="_blank"
              className="inline-flex items-center justify-center"
            >
              <img className="fill-white" src="/instagram.svg" alt="site logo" width={35} height={35} />
            </a>
          </div>
          <div className="mx-2 inline-flex">
            <a
              href="https://www.facebook.com/adityadimasptra"
              target="_blank"
              className="inline-flex items-center justify-center"
            >
              <img src="/facebook.svg" alt="site logo" width={35} height={35} />
            </a>
          </div>
          <div className="mx-2 inline-flex">
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              className="inline-flex items-center justify-center"
            >
              <img src="/whatsapp.svg" alt="site logo" width={35} height={35} />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          Copyright by Adimastra
        </div>
      </div>
    </div>
  )
}
