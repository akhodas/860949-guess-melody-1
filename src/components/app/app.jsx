import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getStep} from "../../reducer/game/selectors";
import {getQuestions} from "../../reducer/data/selectors";

const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};


class App extends Component {
  render() {
    const {
      questions,
      renderScreen,
      step,
    } = this.props;

    return (
      <section className={`game ${Type.ARTIST}`}>
        {renderScreen(questions[step])}
      </section>
    );
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  renderScreen: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questions: getQuestions(state),
  step: getStep(state),
});


export {App};

export default connect(mapStateToProps)(App);
