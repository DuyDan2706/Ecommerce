// import Footer from "../Footer/Footer";
import Header from "../Header/Header";


export default function DefaultComponent({ children }) {
  return (
    <div>
      <Header/>
      {children}
      {/* <Footer/> */}
    </div>
  )
}
