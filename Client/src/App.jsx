import { Detail,Form,Landing,Home } from "./Views/index"
import { Route, Routes } from "react-router-dom"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={Landing}></Route>
        <Route path="/home" element={Home}></Route>
        <Route path="/form" element={Form}></Route>
        <Route path="/detail/:id" element={Detail}></Route>
      </Routes>
    </div>
  )
}

export default App
