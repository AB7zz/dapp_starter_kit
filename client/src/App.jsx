import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Doctors/Login/Login';
import Home from './components/Doctors/Home/Home'
import Profile from './components/Doctors/Profile/Profile'
import PatientDetails from './components/Doctors/PatientDetails/PatientDetails';
import Search from './components/Doctors/Search/Search';
import Appointments from './components/Doctors/Appointments/Appointments';

// import {Home as PatHome} from './components/Patients/Home/Home'
// import {Login as PatLogin} from './components/Patients/Login/Login'
// import {Profile as PatProfile} from './components/Patients/Profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/appointments" element={<Appointments />} />
        <Route path="/doctor/home" element={<Home />} />
        <Route path="/doctor/login" element={<Login />} />
        <Route path="/doctor/patientDetails" element={<PatientDetails />} />
        <Route path="/doctor/profile" element={<Profile />} />
        <Route path="/doctor/search" element={<Search />} />

        {/* <Route path="/patient/home" element={<PatHome />} />
        <Route path="/patient/login" element={<PatLogin />} />
        <Route path="/patient/profile" element={<PatProfile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
