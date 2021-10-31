import React, { useState } from "react";
import SmallTitle from "../../common/typografy/smallTitle";

function checkStorage() {
  return Boolean(localStorage.getItem("user"));
};

const withSimpleComponent = (Component) => (props) => {
  const [isAuth, setIsAuth] = useState(checkStorage());

  const onLogin = () => {
    localStorage.setItem("user", "Oleg");
    setIsAuth(checkStorage());
  };

  const onLogOut = () => {
    localStorage.removeItem("user");
    setIsAuth(checkStorage());
  };
  return (
    <>
      <SmallTitle>{isAuth ? "Вы авторизованы" : "Вы вышли из системы"}</SmallTitle>
      <Component {...props} isAuth={isAuth} onLogOut={onLogOut} onLogin={onLogin} />
    </>
   );
};

export default withSimpleComponent;
