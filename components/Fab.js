const FloatingButton = () => {
  return ( 
    <div className="fab fixed right-5 z-20 bottom-5 rounded-full">
        <a className="" href="https://wa.me/6281332693518" target="_blank" rel="noreferrer">
          <img className="h-16" src="/whatsapp-fab.svg" alt="call-whatsapp" />
        </a>
        <span className="flex absolute top-0 right-0 h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
    </div>
   );
}
 
export default FloatingButton;