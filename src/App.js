// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jobs from './Pages/Jobs';
import MyApplication from './Pages/MyApplication';
import Profiles from './Pages/Profiles';
import AdminDasboard from './Pages/AdminDasboard';
import Navabar from './component/Navabar';
import Contact from './Pages/Contact';
import Aboutus from './Pages/Aboutus';
import Register from './Pages/Register';
import Login from './Pages/Login';
import CreateJob from './Pages/CreateJob';
import EditJob from './Pages/EditJob';
import JobDetails from './Pages/JobDetails';
import ProtectedRoute from './component/ProtectedRoute';
import AdminRoute from './component/AdminRoute';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path='/' element={<Jobs />} />
          <Route path='/my-application' element={<ProtectedRoute> <MyApplication /></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profiles /></ProtectedRoute>} />
          <Route path='/admin-dashboard' element={<AdminRoute><AdminDasboard /></AdminRoute>} />
          <Route path='/job/:id' element={<JobDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/create-job" element={<AdminRoute><CreateJob /></AdminRoute>} />
          <Route path="/admin/edit-job/:id" element={<AdminRoute><EditJob /></AdminRoute>} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
