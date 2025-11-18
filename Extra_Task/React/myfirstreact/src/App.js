import Footer from "./Layout_src/Component/Footer";
import Header from "./Layout_src/Component/Header";
import About from "./Layout_src/pages/About";
import Contact from "./Layout_src/pages/Contact";
import Home from "./Layout_src/pages/Home";
import Func_Props from "./Props/Func_Props";
import Cal from "./Props/cal";

import "./index.css";

function App() {
  return (
    <div className="parent">
      {/* <Header/> */}
      {/* <Footer/> */}
      {/* <About /> */}
      {/* <Home /> */}
      {/* <Contact/> */}

      <Func_Props img="https://www.w3schools.com/bootstrap5/img_avatar3.png" title="hkijj" des="hyello" />
      <Func_Props img="https://www.w3schools.com/bootstrap5/img_avatar1.png" title="abc" des="xyz" />
      <Func_Props img="https://www.w3schools.com/bootstrap5/img_avatar3.png" title="hkijj" des="hyello" />
      <Func_Props img="https://www.w3schools.com/bootstrap5/img_avatar3.png" title="hkijj" des="hyello" />


      {/* <Cal /> */}
    </div>
  );
}


export default App;
