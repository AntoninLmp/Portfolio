import { BrowserRouter, Routes, Route }
    from 'react-router-dom';
import MainStart from './pages/Home/MainStart.jsx';
import Main from './pages/Home/Main.jsx';
import Career from './pages/Carrer/Career.jsx';
import PersonalPage from './pages/Personnal/PersonalPage.jsx';
import Studies from './pages/Studies/Studies.jsx';
import Project from './pages/Projects/Project.jsx';

function App() {
    return (
        <BrowserRouter basename={"/Portfolio"}>
            <Routes>
                <Route>
                    <Route index element={<MainStart/>} />
                    <Route path={"/Home"} element={<Main/>} />
                    <Route path={"/parcoursProfessionnel"} element={<Career/>} />
                    <Route path={"/AntoninLampin"} element={<PersonalPage/>} />
                    <Route path={"/Studies"} element={<Studies/>} />
                    <Route path={"/Projects"} element={<Project/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
