import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ClassList from './components/ClassList';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import TeacherDetails from './components/TeacherDetails';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
	const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const renderLogin = () => <Login setUser={setUser} setLoggedIn={setLoggedIn} />;

  return (
    <HashRouter className="App">
      <ToastContainer />
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
      <Routes>
        <Route path='/' element={loggedIn ? <Dashboard user={user} /> : renderLogin()} />
        <Route path='/class-list' element={loggedIn ? <ClassList user={user} /> : renderLogin()} />
        <Route path='/student-list' element={loggedIn ? <StudentList /> : renderLogin()} />
        <Route path='/student-details' element={loggedIn ? <StudentDetails /> : renderLogin()} />
        <Route path='/teacher-details' element={loggedIn ? <TeacherDetails /> : renderLogin()} />
      </Routes>
    </HashRouter>
  );
}

export default App;
