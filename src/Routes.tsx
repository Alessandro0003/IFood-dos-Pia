import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './components/Header';
import Imagens from './pages/Imagens';

const AppRouter = () => {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/imagens' element={<Imagens />}/>
      </Routes>
    </Router>
  )
}

export default AppRouter;
