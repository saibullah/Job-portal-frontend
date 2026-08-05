// import logo from './logo.svg';
import {  Route, Routes } from 'react-router-dom';
import Jobs from './Pages/Jobs';
import MyApplication from './Pages/MyApplication';
import Profiles from './Pages/Profiles';
import AdminDasboard from './Pages/AdminDasboard';
import Navabar from './component/Navabar';
import Aboutus from './Pages/Aboutus';
import Register from './Pages/Register';
import Login from './Pages/Login';
import CreateJob from './Pages/CreateJob';
import EditJob from './Pages/EditJob';
import JobDetails from './Pages/JobDetails';
import ProtectedRoute from './component/ProtectedRoute';
import AdminRoute from './component/AdminRoute';
import AdminApplicant from './Pages/AdminApplicant';


function App() {
  return (
    <div>
        <Navabar />
        <Routes>
          <Route path='/' element={<Jobs />} />
          <Route path='/my-application' element={<ProtectedRoute> <MyApplication /></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profiles /></ProtectedRoute>} />
          <Route path='/admin-dashboard' element={<AdminRoute><AdminDasboard /></AdminRoute>} />
          <Route path='/job/:id' element={<JobDetails />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/create-job" element={<AdminRoute><CreateJob /></AdminRoute>} />
          <Route path="/admin/edit-job/:id" element={<AdminRoute><EditJob /></AdminRoute>} />
          <Route path="/admin/applicants/:jobId" element={<AdminRoute><AdminApplicant/></AdminRoute>} />


        </Routes>

    </div>
  );
}

export default App;
