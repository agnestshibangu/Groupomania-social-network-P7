import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Forum from './pages/Forum'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import ForumText from './pages/ForumText'
 import Header from './components/Header'
import Footer from './components/Footer'
/// pages forum ///
import ForumTextP1 from './pages/ForumTextP1'
import ForumTextP2 from './pages/ForumTextP2'
import ForumTextP3 from './pages/ForumTextP3'

import './index.css'
import { DataProvider } from "./DataContext"






ReactDOM.render(
   

  <Router>
    
    <Switch>
      <DataProvider>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/forumtext">
          <ForumText />
        </Route>
        {/* pages forum  */}
        <Route path="/forumtextp1">
          <ForumTextP1 />
        </Route>
        <Route path="/forumtextp2">
          <ForumTextP2 />
        </Route>
        <Route path="/forumtextp3">
          <ForumTextP3 />
        </Route>
        {/* pages forum  */}
        <Route path="/forum">
          <Forum />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </DataProvider>
    </Switch>
    <Footer />

  </Router>,
  document.getElementById('root')
)