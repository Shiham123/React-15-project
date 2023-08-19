import React, { Fragment, useEffect } from 'react';

const Alert = (props) => {
  const { type, msg, removeAlert } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fragment>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Fragment>
  );
};

export default Alert;
