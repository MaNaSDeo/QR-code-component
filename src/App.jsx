import qrCode from "./images/qrCode.png"
function App() {

  return (
    <div className="bg-gray-300 w-screen h-screen flex justify-center items-center">
      <div className="bg-white p-3 rounded-md max-w-xs h-auto">
        <img src={qrCode} alt="QR Code" className=" rounded-md"/>
        <p className="font-semibold text-2xl m-2 text-center">Improve your front-end skills by building projects</p>
        <p className="font-medium text-gray-400 m-2 text-center">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default App
