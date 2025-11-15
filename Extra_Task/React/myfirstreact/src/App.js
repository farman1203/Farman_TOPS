import Footer from "./Layout_src/Component/Footer";
import Header from "./Layout_src/Component/Header";
import About from "./Layout_src/pages/About";
import Contact from "./Layout_src/pages/Contact";
import Home from "./Layout_src/pages/Home";
import Func_Props from "./Props/Func_Props";

function App() {
  return (
    <div>
      {/* <Header/> */}
      {/* <Footer/> */}
      {/* <About /> */}
      {/* <Home /> */}
      {/* <Contact/> */}

      <Func_Props img="https://www.w3schools.com/bootstrap5/img_avatar3.png" title="hkijj" des="hyello" />
      <Func_Props img="https://www.w3schools.com/bootstrap5/img_avatar3.png" title="hkijj" des="hyello" />
      <Func_Props img="https://www.w3schools.com/bootstrap5/img_avatar3.png" title="hkijj" des="hyello" />
      <Func_Props img="https://www.w3schools.com/bootstrap5/img_avatar3.png" title="hkijj" des="hyello" />
    </div>
  );
}


export default App;
