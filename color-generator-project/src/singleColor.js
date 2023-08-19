import React, { useEffect, useState } from 'react';
// import rgbToHex from './util';

const SingleColor = (props) => {
  const { rgb, weight, index, hexColor } = props;
  const [alert, setAlert] = useState(false);
  const backgroundRgb = rgb.join(',');
  // const hex = rgbToHex(...rgb);

  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index >= 6 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${backgroundRgb})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copy to clipboard</p>}
    </article>
  );
};

export default SingleColor;
