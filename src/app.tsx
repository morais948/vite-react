import { useState } from 'react'
import LayoutHome from './templates/LayoutHome'
import LayoutDashbord from './templates/LayoutDashbord'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import Exp1 from './components/Example1'
import Exp2 from './components/Example2'
import NotFound from './components/NotFound'
import MyContext from './contexts/myContext'
import EditUser from './components/EditUser'

type User = {
    name: string,
    password: string
}

function app() {
    const [user, setUser] = useState<User>({name: 'matheus', 'password': '123'})

    return (
        <MyContext.Provider value={{ user, setUser }} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutHome />} >
                        <Route index element={<Exp1 />} />
                        <Route path="exp1" element={<Exp1 />}></Route>
                        <Route path="exp2" element={<Exp2 />}></Route>
                    </Route>
                    <Route path="adm" element={<LayoutDashbord />} >
                        <Route index element={<Exp1 />} />
                        <Route path="exp-one" element={<Exp1 />}></Route>
                        <Route path="user/edit" element={<EditUser />}></Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    )
}

export default app
