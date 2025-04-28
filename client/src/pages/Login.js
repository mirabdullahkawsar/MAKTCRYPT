// // import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import React, { useState } from "react";

// function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", formData);
//       localStorage.setItem("user", res.data.name);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl"
//     >
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block mb-1 text-gray-600">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="you@example.com"
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-gray-600">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="••••••••"
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             required
//           />
//         </div>
//         {error && <p className="text-red-500 text-sm">{error}</p>}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//         >
//           Login
//         </button>
//         <p className="text-sm text-center mt-4 text-gray-500">
//           Don’t have an account?
//           <button
//             onClick={() => navigate("/register")}
//             className="ml-1 text-blue-600 hover:underline"
//             type="button"
//           >
//             Register
//           </button>
//         </p>
//       </form>
//     </motion.div>
//   );
// }

// export default Login;
// client/src/pages/Login.js
// client/src/pages/Login.js---------------------------------------------------------------
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import React, { useState } from "react";

// function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", formData);
//       localStorage.setItem("user", res.data.name);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-gradient-to-br from-teal-400 to-blue-500 w-full max-w-md p-8 rounded-xl shadow-2xl mx-auto mt-16"
//     >
//       <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block mb-1 text-white">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="you@example.com"
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-white">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="••••••••"
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             required
//           />
//         </div>
//         {error && <p className="text-red-500 text-sm">{error}</p>}
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
//         >
//           Login
//         </button>
//         <p className="text-sm text-center mt-4 text-white">
//           Don’t have an account?
//           <button
//             onClick={() => navigate("/register")}
//             className="ml-1 text-blue-200 hover:underline"
//             type="button"
//           >
//             Register
//           </button>
//         </p>
//       </form>
//     </motion.div>
//   );
// }

// export default Login;
//----------------------------------------------------------------------------------

import { Card, TextField, Button, Typography, Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("user", res.data.name);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #00bfa5 0%, #1a237e 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Card sx={{ width: 450, p: 4, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
            MAKTCRYPT
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            {error && (
              <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

            <Button
              fullWidth
              variant="contained"
              size="large"
              type="submit"
              sx={{ mt: 2, py: 1.5, fontSize: '1rem' }}
            >
              Sign In
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don't have an account?{' '}
              <Link component="button" onClick={() => navigate("/register")} sx={{ fontWeight: 600 }}>
                Create Account
              </Link>
            </Typography>
          </form>
        </Card>
      </Box>
    </motion.div>
  );
}

export default Login;