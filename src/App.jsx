import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RowHouse from './pages/RowHouse';
import GroundWork from './pages/GroundWork';
import SeventhSem from './pages/SeventhSem';
import EighthSem from './pages/EighthSem';
import NinthSem from './pages/NinthSem';
import Thesis from './pages/Thesis';
import FreelancingHub from './pages/FreelancingHub';
import FreelanceProject from './pages/FreelanceProject';
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
      
      <Route path="/academic work/finalYearProject/theses.html" element={<Thesis />} />
      <Route path="/thesis" element={<Thesis />} />
      
      <Route path="/freelancing project/freelancingproject.html" element={<FreelancingHub />} />
      <Route path="/freelancing" element={<FreelancingHub />} />
      
      <Route path="/freelancing/clinic" element={<FreelanceProject />} />
      <Route path="/freelancing/mosque" element={<FreelanceProject />} />
      <Route path="/freelancing/cafe" element={<FreelanceProject />} />
      <Route path="/freelancing/villa" element={<FreelanceProject />} />
      <Route path="/freelancing/rental-house" element={<FreelanceProject />} />
      
      <Route path="/freelancing project/clinic.html" element={<FreelanceProject />} />
      <Route path="/freelancing project/mosque.html" element={<FreelanceProject />} />
      <Route path="/freelancing project/cafe.html" element={<FreelanceProject />} />
      <Route path="/freelancing project/villa.html" element={<FreelanceProject />} />
      <Route path="/freelancing project/rentalHouse.html" element={<FreelanceProject />} />
    </Routes>
  );
}

export default App;
