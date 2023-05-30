import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { UserProvider } from "./contexts/UserContext";
import { AuthProvider } from "./contexts/AuthContext";
import BookListing from "./components/BookListing";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    
     <BrowserRouter>
     <AuthProvider>
         <UserProvider>
           <Navbar />
          <SearchBar/>
           <Routes>
             <Route path="/login" element={<Login />}></Route>
             <Route path="/register" element={<Register />}></Route>
             <Route path="/booklisting" element={<BookListing />}></Route>
           </Routes> 
           <Footer />    
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
