import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogOut, onLogin }) => {
  return (
      <button
        className="btn btn-primary"
        onClick={isAuth ? onLogOut : onLogin}
      >
        {isAuth ? "Выйти из системы" : "Войти"}
      </button>
   );
};

SimpleComponent.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired
};

export default SimpleComponent;
