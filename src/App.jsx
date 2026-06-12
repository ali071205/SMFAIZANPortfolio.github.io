import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RowHouse from './pages/RowHouse';
import GroundWork from './pages/GroundWork';
import SeventhSem from './pages/SeventhSem';
import EighthSem from './pages/EighthSem';
import NinthSem from './pages/NinthSem';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/self_project/self_project/rowHouse.html" element={<RowHouse />} />
      <Route path="/rowhouse" element={<RowHouse />} />
      
      <Route path="/self_project/self_project/groundwork.html" element={<GroundWork />} />
      <Route path="/groundwork" element={<GroundWork />} />
      
      <Route path="/academic work/7thSemproject/7th-semester_project.html" element={<SeventhSem />} />
      <Route path="/seventh-sem" element={<SeventhSem />} />
      
      <Route path="/academic work/8thSemisterProject/8th-semester_project.html" element={<EighthSem />} />
      <Route path="/eighth-sem" element={<EighthSem />} />
      
      <Route path="/academic work/9thsemproject/9thsem.html" element={<NinthSem />} />
      <Route path="/ninth-sem" element={<NinthSem />} />
    </Routes>
  );
}

export default App;
