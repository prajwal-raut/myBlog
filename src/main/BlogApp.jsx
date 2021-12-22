import React from "react";
import "./css/Utility.css";
import "./css/Style.css";
import "./css/Responsive.css";
import "./css/Animation.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const BlogApp = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
};

export default BlogApp;
