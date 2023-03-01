import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleBackClick = () => {
    setMenuOpen(false);
  };

  return (
     <div className="container">
          <Navbar 
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            handleBackClick={handleBackClick}
          />

          <Main
            handleMenuClick={handleMenuClick}
          />
      </div>
  );
}


export default App;
