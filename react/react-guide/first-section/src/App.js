import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpensePage from './pages/ExpensePage';
import AddUserPage from './pages/AddUserPage';

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/expense' element={<ExpensePage />} />
          <Route path='/adduser' element={<AddUserPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
