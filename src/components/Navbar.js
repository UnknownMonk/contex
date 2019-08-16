import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContex';
import { AuthContext } from '../context/AuthContext';

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {authContext => (
//           <ThemeContext.Consumer>
//             {themeContext => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>Contex App</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? 'Logged in ' : 'Logged out'}
//                   </div>
//                   <ul>
//                     <li> Home</li>
//                     <li> About</li>
//                     <li>Contact </li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Contex App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged in ' : 'Logged out'}
      </div>
      <ul>
        <li> Home</li>
        <li> About</li>
        <li>Contact </li>
      </ul>
    </nav>
  );
}

export default Navbar;
