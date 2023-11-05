import { Detail,Form,Landing,Home, FormUpdate } from "./Views/index"
import { Route, Routes } from "react-router-dom"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/formUpdate/:id" element={<FormUpdate/>}></Route>
      </Routes>
    </div>
  )
}

export default App
