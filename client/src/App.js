// // // client/src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }
// client/src/App.js_______________________________________________
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";   // Ensure the Register component is in src/pages/Register.js
// import Login from "./pages/Login";         // Ensure the Login component is in src/pages/Login.js
// import Dashboard from "./pages/Dashboard"; // Ensure the Dashboard component is in src/pages/Dashboard.js

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
//--------------------------------------------------------------------------------------------

// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// 1. Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Deep blue
    },
    secondary: {
      main: '#00bfa5', // Teal
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

// 2. Global styles component
const GlobalStyles = () => (
  <style>
    {`
      body {
        min-height: 100vh;
        background: linear-gradient(135deg, #1a237e 0%, #00bfa5 100%);
        background-attachment: fixed;
      }
    `}
  </style>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
