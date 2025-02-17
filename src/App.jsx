import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Gathering from './pages/Gathering'
import Enumeration from './pages/Enumeration'
import Vulnerability from './pages/Vulnerability'
import Sql_injection from './pages/Sql_injection'
import Web_header from './pages/Web_header'
import Encryption from './pages/Encryption'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Gathering />} />
                    <Route path="enumeration" element={<Enumeration />} />
                    <Route path="vulnerability" element={<Vulnerability />} />
                    <Route path="sqlinjection" element={<Sql_injection />} />
                    <Route path="webheader" element={<Web_header />} />
                    <Route path="encryption" element={<Encryption />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App
