// // import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// function Dashboard() {
//   const [posts, setPosts] = useState([]);
//   const [content, setContent] = useState("");
//   const [message, setMessage] = useState("");
//   const name = localStorage.getItem("user") || "";
//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     const res = await axios.get("http://localhost:5000/api/posts");
//     setPosts(res.data.reverse());
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/posts", { content, author: name });
//       setContent("");
//       setMessage("✅ Post created successfully");
//       fetchPosts();
//     } catch (err) {
//       setMessage("❌ Failed to post");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-10 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-700">Welcome, {name}</h2>
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//           >
//             Logout
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <textarea
//             placeholder="Write something secure..."
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             rows={4}
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
//           >
//             Post
//           </button>
//           <p className="text-sm text-center text-gray-600">{message}</p>
//         </form>

//         <hr className="my-6" />

//         <h3 className="text-lg font-semibold mb-4 text-gray-700">🔐 Secure Posts</h3>
//         <ul className="space-y-3">
//           {posts.map((post, idx) => (
//             <li key={idx} className="bg-gray-100 p-4 rounded-md shadow-sm">
//               <p className="text-gray-800 font-medium">{post.author}</p>
//               <p className="text-gray-600">{post.content}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
// client/src/pages/Dashboard.js--------------------------------------------------------------------------------------------
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// function Dashboard() {
//   const [posts, setPosts] = useState([]);
//   const [content, setContent] = useState("");
//   const [message, setMessage] = useState("");
//   const name = localStorage.getItem("user") || "";
//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     const res = await axios.get("http://localhost:5000/api/posts");
//     setPosts(res.data.reverse());
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/posts", { content, author: name });
//       setContent("");
//       setMessage("✅ Post created successfully");
//       fetchPosts();
//     } catch (err) {
//       setMessage("❌ Failed to post");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 py-10 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-700">Welcome, {name}</h2>
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//           >
//             Logout
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <textarea
//             placeholder="Write something secure..."
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             rows={4}
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition"
//           >
//             Post
//           </button>
//           <p className="text-sm text-center text-gray-600">{message}</p>
//         </form>

//         <hr className="my-6" />

//         <h3 className="text-lg font-semibold mb-4 text-gray-700">🔐 Secure Posts</h3>
//         <ul className="space-y-3">
//           {posts.map((post, idx) => (
//             <li key={idx} className="bg-gray-100 p-4 rounded-md shadow-sm">
//               <p className="text-gray-800 font-medium">{post.author}</p>
//               <p className="text-gray-600">{post.content}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
// client/src/pages/Dashboard.js--------------------------------------------------------------------------------------------
import { Container, Card, TextField, Button, Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const name = localStorage.getItem("user") || "";
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/posts");
    setPosts(res.data.reverse());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/posts", { content, author: name });
      setContent("");
      setMessage("✅ Post created successfully");
      fetchPosts();
    } catch (err) {
      setMessage("❌ Failed to post");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a237e 0%, #4a148c 100%)',
        py: 8
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ p: 4, borderRadius: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Welcome, {name}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleLogout}
              sx={{ textTransform: 'none' }}
            >
              Logout
            </Button>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Write something secure..."
              variant="outlined"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              sx={{ mb: 2 }}
            />
            
            <Button
              fullWidth
              variant="contained"
              type="submit"
              size="large"
              sx={{ mb: 2 }}
            >
              Publish Post
            </Button>
            
            <Typography variant="body2" color="textSecondary" align="center">
              {message}
            </Typography>
          </form>

          <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              🔒 Secure Posts
            </Typography>
            
            <List sx={{ width: '100%' }}>
              {posts.map((post, idx) => (
                <Card key={idx} sx={{ mb: 2, p: 2, borderRadius: 2 }}>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {post.author}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body1" color="text.secondary">
                          {post.content}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Card>
              ))}
            </List>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default Dashboard;