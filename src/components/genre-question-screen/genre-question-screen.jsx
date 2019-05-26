import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player/audio-player.jsx';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    const {question} = this.props;
    const {answers} = question;

    this.state = {
      activePlayer: -1,
      userAnswer: new Array(answers.length).fill(false),
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game game--genre">
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
            onAnswer(this.state.userAnswer);
          }}>
            {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
              <AudioPlayer
                src={it.src}
                isPlaying={i === this.state.activePlayer}
                onPlayButtonClick={() => this.setState({
                  activePlayer: this.state.activePlayer === i ? -1 : i
                })}
              />
              <div className="game__answer">
                <input
                  checked={this.state.userAnswer[i]}
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  onChange={() => {
                    const userAnswer = [...this.state.userAnswer];
                    userAnswer[i] = !userAnswer[i];
                    this.setState({userAnswer});
                  }}
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

  _checkedAnswers(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].tagName === `INPUT` && array[i].checked) {
        result.push(array[i].value);
      }
    }
    return result;
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
