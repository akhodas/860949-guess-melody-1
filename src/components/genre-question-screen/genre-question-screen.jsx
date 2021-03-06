import React from 'react';
import PropTypes from 'prop-types';

class GenreQuestionScreen extends React.PureComponent {
  render() {
    const {
      question,
      onAnswer,
      onChange,
      renderAnswer,
      userAnswer,
    } = this.props;

    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game game--ganre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{
                filter: `url(#blur)`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`
              }}
            />
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"/>
            <div className="wrong"/>
            <div className="wrong"/>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={(e) => {
            e.preventDefault();
            onAnswer();
          }}>
            {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
              {renderAnswer(it, i)}
              <div className="game__answer">
                <input
                  checked={userAnswer[i]}
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  onChange={() => onChange(i)}
                />
                <label className="game__check" htmlFor={`answer-${i}`}>
                    Отметить
                </label>
              </div>
            </div>)}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  renderAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  userAnswer: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default GenreQuestionScreen;
