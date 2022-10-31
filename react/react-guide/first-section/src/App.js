import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpensePage from './pages/ExpensePage';
import AddUserPage from './pages/AddUserPage';
import LoginPage from './pages/LoginPage';
import PagesList from './pages/PagesList';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PagesList />} />
          <Route path='/expense' element={<ExpensePage />} />
          <Route path='/adduser' element={<AddUserPage />} />
          <Route path='/side' element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
