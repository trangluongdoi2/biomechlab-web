import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import People from './pages/people/People';
import Turtorials from './pages/turtorial/Turtorials';
import Professor from './pages/people/Professor';
import Researcher from './pages/people/Researcher';
import Login from './components/function/LoginForm';
import Register from './components/function/RegisterForm';
import Project from './pages/project/Project';
import Publication from './pages/publication/Publications';
import Student from './pages/people/Student';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/peoples" component={People} />
          <Route path="/turtorials" component={Turtorials} />
          <Route path="/professors" component={Professor} />
          <Route path="/researcher" component={Researcher} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/project" component={Project} />
          <Route path="/publication" component={Publication} />
          <Route path="/students" component={Student} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
