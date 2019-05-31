import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {compose} from "recompose";

import ArtistQuestionScreen from "../../components/artist-question-screen/artist-question-screen.jsx";
import GameOverScreen from "../../components/game-over-screen/game-over-screen.jsx";
import QuestionGenreScreen from "../../components/genre-question-screen/genre-question-screen.jsx";
import WelcomeScreen from "../../components/welcome-screen/welcome-screen.jsx";
import WinScreen from "../../components/win-screen/win-screen.jsx";

import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withTransformProps from "../../hocs/with-transform-props/with-transform-props";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";
import {ActionCreator} from "../../reducer/game/game";

const TypeQuestion = {
  ARTIST: `artist`,
  GENRE: `genre`,
};

const transformPlayerToAnswer = (props) => {
  const newProps = Object.assign({}, props, {
    renderAnswer: props.renderPlayer,
  });
  delete newProps.renderPlayer;
  return newProps;
};

const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const QuestionGenreScreenWrapped = withUserAnswer(withActivePlayer(
    withTransformProps(transformPlayerToAnswer)(QuestionGenreScreen)));


const withScreenSwitch = (Component) => {
  class WithScreenSwitch extends PureComponent {
    constructor(props) {
      super(props);

      this._getScreen = this._getScreen.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        renderScreen={this._getScreen}
      />;
    }

    _getScreen(question) {
      const {
        onUserAnswer,
        mistakes,
        maxMistakes,
        resetGame,
      } = this.props;

      if (!question) {
        const {step, questions} = this.props;
        if (step > questions.length - 1) {
          return <WinScreen
            onRelaunchButtonClick={resetGame}/>;
        } else {
          const {
            gameTime,
            onWelcomeScreenClick,
          } = this.props;

          return <WelcomeScreen
            errorCount={maxMistakes}
            gameTime={gameTime}
            onClick={onWelcomeScreenClick}
          />;
        }
      }

      if (mistakes >= maxMistakes) {
        return <GameOverScreen
          onRelaunchButtonClick={resetGame}
        />;
      }

      switch (question.type) {
        case TypeQuestion.GENRE: return <QuestionGenreScreenWrapped
          answers={question.answers}
          question={question}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              question
          )}
        />;

        case TypeQuestion.ARTIST: return <ArtistQuestionScreenWrapped
          question={question}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              question
          )}
        />;
      }

      return null;
    }

  }

  WithScreenSwitch.propTypes = {
    gameTime: PropTypes.number.isRequired,
    questionsLength: PropTypes.number,
    maxMistakes: PropTypes.number.isRequired,
    mistakes: PropTypes.number.isRequired,
    onUserAnswer: PropTypes.func.isRequired,
    onWelcomeScreenClick: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    step: PropTypes.number.isRequired,
  };

  return WithScreenSwitch;
};


export {withScreenSwitch};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questions: state.data.questions,
  step: state.game.step,
  mistakes: state.game.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question
    ));
  },

  resetGame: () => dispatch(ActionCreator.resetGame()),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withScreenSwitch
);
