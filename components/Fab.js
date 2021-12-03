const FloatingButton = () => {
  return ( 
    <div className="fab fixed right-5 bottom-5 hover:shadow-md rounded-full">
        <a href="https://wa.me/15551234567" target="_blank">
          <img className="w-16 lg:w-20" src="/whatsapp-fab.svg" alt="call-whatsapp" />
        </a>
    </div>
   );
}
 
export default FloatingButton;