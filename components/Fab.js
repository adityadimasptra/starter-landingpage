import Image from 'next/image'

const FloatingButton = () => {
  return ( 
    <div className="fab fixed right-5 bottom-5 hover:shadow-md rounded-full">
        <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer">
          <Image width={35} height={35} src="/whatsapp-fab.svg" alt="call-whatsapp" />
        </a>
    </div>
   );
}
 
export default FloatingButton;