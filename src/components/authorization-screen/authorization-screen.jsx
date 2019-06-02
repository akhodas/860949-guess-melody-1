import React from 'react';
import PropTypes from 'prop-types';


const AuthorizationScreen = (props) => {
  const {name, password, logIn, onChange} = props;

  return (
    <section className="login">
      <div className="login__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="login__title">Необходима авторизация</h2>
      <p className="login__text">Представтесь!</p>
      <form className="login__form" action="">
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input
            className="login__input"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onChange}
          />
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input
            className="login__input"
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
          />
          <span className="login__error">Неверный пароль</span>
        </p>
        <button
          className="login__button button"
          type="submit"
          onClick = {logIn}
        >Войти</button>
      </form>
    </section>
  );
};


AuthorizationScreen.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AuthorizationScreen;
