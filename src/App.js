import { AppBar } from "@mui/material";
import Home2 from "./project2/Home2";
import Nav from "./project2/Nav";
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import Contact2 from "./project2/Contact2";
import Aboutus2 from "./project2/Aboutus2"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Counter from "./hoc1/Counter";
import Hovercount from "./hoc1/Hovercount";
import MyForm from "./project2/MyForm";
import HooskEx from "./HooksEx1/HooskEx";
import Form from "./component/Form";
import GetEX from "./Http/GetEX";
import Logindetails from "./Project_elib/Logindetails";


function App() {
  return (
    /*<div className="App">
     <Nav/>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home2/>} />
     <Route path="/contact" element={<Contact2/>}/>
     <Route path="/about" element={<Aboutus2/>} />
     </Routes>
     </BrowserRouter>
     </div>
     <div>
     
     <Counter/>
     <Hovercount/>
     <Form/>
     <GetEX/>
     </div>*/ 
     <div>
     <Logindetails/>
     </div>

  );
}
export default App;