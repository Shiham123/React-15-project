import React, { Fragment, useEffect } from 'react';

const Alert = (props) => {
  const { type, msg, removeAlert, list } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);

  return (
    <Fragment>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Fragment>
  );
};

export default Alert;
