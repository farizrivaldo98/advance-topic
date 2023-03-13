import React from "react";
function LernHOC(Component) {
  return (props) => {
    const style = {
      padding: "0.2rem",
      margin: "1rem",
      backgroundColor: "blue",
    };
    return <Component style={style} {...props} />;
  };
}

export default LernHOC;
