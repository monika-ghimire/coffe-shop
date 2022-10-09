
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Items from "../Components/Items";


export default function RouterHolder() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
       <Route path='/items' element={<Items/>}/>
      </Routes>
    </BrowserRouter>
  );
}
