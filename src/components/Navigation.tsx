import React from "react";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/detail">PostDetail</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navigation;
