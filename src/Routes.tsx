import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </Router>
  )
}

export default AppRouter;
