import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContexProvider from './context/ThemeContex';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContexProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContexProvider>
    </div>
  );
}

export default App;
