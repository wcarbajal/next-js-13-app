import React from "react";
import Counter from "./[id]/Counter";

const PostLayout = ({ children }) => {
  return (
    <div>
      <Counter />
      {children}
    </div>
  );
};

export default PostLayout;
