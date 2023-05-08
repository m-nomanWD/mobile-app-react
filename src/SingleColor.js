import React, { useState, useEffect } from "react";

const SingleColor = ({ color, colorIndex }) => {
  const [alert, setAlert] = useState(false);
  const { hex, weight } = color;
  useEffect(() => {
    const toggling = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => clearTimeout(toggling);
  }, [alert]);
  return (
    <div
      style={{
        backgroundColor: `#${color.hex}`,
      }}
      className={`color ${colorIndex > 10 && "color-light"}`}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hex}`);
      }}
    >
      <p className="percent-value">{`${weight}%`}</p>
      <p className="color-value">{`#${hex}`}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </div>
  );
};

export default SingleColor;
