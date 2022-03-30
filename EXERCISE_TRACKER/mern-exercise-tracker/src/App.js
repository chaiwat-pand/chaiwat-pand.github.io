import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Route, Routes, Navigate, Link } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercises";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      {/* <Navbar /> */}
      <Route path="/" element={<ExercisesList />} />
      <Route path="/edit/:id" element={<EditExercise />} />
      <Route path="/create" element={<CreateExercise />} />
      <Route path="/user" element={<CreateUser />} />
    </Routes>

    // </BrowserRouter>
  );
}

export default App;
