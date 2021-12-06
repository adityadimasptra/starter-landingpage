
import Image from 'next/image'

const socialMedia = [
  {name:'instagram-teescoco', link:'https://www.instagram.com/adityadimasptra/', icon:'/instagram.svg', active: true},
  {name:'facebook-teescoco', link:'https://www.facebook.com/adityadimasptra', icon:'/facebook.svg', active: true},
  {name:'whatsapp-teescoco', link:'https://wa.me/6281553176532', icon:'/whatsapp.svg', active: false}
]

export default function Footer() {
  return (
    <div className="py-12 bg-green-800 text-white clear-both">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {socialMedia.map((social,index) => {
            if (social.active) return (
              <div className="mx-2 inline-flex" key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <Image className="heartbeat" src={social.icon} alt="site logo" width={35} height={35} />
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          Copyright by Adimastra
        </div>
      </div>
    </div>
  )
}
