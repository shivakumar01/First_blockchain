
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Transactions from "./Components/Transactions";
import Welcome from "./Components/Welcome";

const App = () => {

  return (
    
    <div className="my-0">
       <div className = "gradient-bg-welcome">
         <Navbar />
         <Welcome />
       </div>
       <Services />
       <Transactions />
       <Footer />
    </div>
  )
}

export default App
