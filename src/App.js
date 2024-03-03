import { Outlet } from 'react-router-dom';
import './App.css';
import AppHeader from './Components/AppHeader/AppHeader';
import Footer from './Components/AppFooter/Footer';

function App() {
  return (
    <div>
      <AppHeader></AppHeader>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
}

export default App;
