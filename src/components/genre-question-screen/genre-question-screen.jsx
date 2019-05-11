import React, {Component} from "react";
import PropTypes from "prop-types";


class GenreQuestionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const index = this.state.answer.indexOf(value);

    if (index < 0) {
      this.state.answer.push(value);
    } else {
      this.state.answer.splice(index, 1);
    }
  }

  render() {
    const {question, onAnswer} = this.props;
    const {
      answers,
      genre,
    } = question;

    return <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line"
            cx="390" cy="390" r="370"
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
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(e) => {
          e.preventDefault();
          onAnswer(this.state.answer);
        }}>
          {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio />
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden"
                type="checkbox"
                name="answer"
                value={`answer-${i}`}
                id={`answer-${i}`}
                onChange={this.handleInputChange}
              />
              <label className="game__check" htmlFor={`answer-${i}`}>
                Отметить
              </label>
            </div>
          </div>)}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }


}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};

export default GenreQuestionScreen;
