import { BrowserRouter, Routes, Route }
    from 'react-router-dom';
import MainStart from './Home/MainStart.jsx';
import Main from './Home/Main.jsx';
import CarrerPath from './Carrer/CarrerPath.jsx';
import PersonalPage from './Personnal/PersonalPage.jsx';
import Studies from './Studies/Studies.jsx';
import Project from './Projects/Project.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<MainStart/>} />
                    <Route path={"/Home"} element={<Main/>} />
                    <Route path={"/parcoursProfessionnel"} element={<CarrerPath/>} />
                    <Route path={"/AntoninLampin"} element={<PersonalPage/>} />
                    <Route path={"/Studies"} element={<Studies/>} />
                    <Route path={"/Projects"} element={<Project/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
