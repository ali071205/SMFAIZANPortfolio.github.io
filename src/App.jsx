import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RowHouse from './pages/RowHouse';
import GroundWork from './pages/GroundWork';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/self_project/self_project/rowHouse.html" element={<RowHouse />} />
      <Route path="/rowhouse" element={<RowHouse />} />
      <Route path="/self_project/self_project/groundwork.html" element={<GroundWork />} />
      <Route path="/groundwork" element={<GroundWork />} />
    </Routes>
  );
}

export default App;
