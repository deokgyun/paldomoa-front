import Layout from "./components/@common/layout/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Board from "./components/board/Board.jsx";
import Festival from "./components/festival/Festival.jsx";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";

function App() {

    return (

        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/board' element={<Board/>}/>
                    <Route path='/festival' element={<Festival/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
