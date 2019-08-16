import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContex';

// class ToggleTheme extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     console.log(this.context);

//     return (
//       <div>
//         <button onClick={toggleTheme}>Toggle the themem</button>
//       </div>
//     );
//   }
// }

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>Toggle the themem</button>
    </div>
  );
};

export default ToggleTheme;
