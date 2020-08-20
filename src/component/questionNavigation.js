import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class QuestionNavigation extends React.Component {
  isFirst(val) {
    if (val === 0) return true;
  }

  isLast(val) {
    if (val === 9) return true;
  }

  render() {
    return (
      <div className="container mt-2">
        <hr></hr>
        <div className="row justify-content-center">
          <button
            onClick={this.props.prev}
            className="btn btn-sm btn-primary m-2"
            disabled={this.isFirst(this.props.counter)}
          >
            Prev
          </button>
          <button
            onClick={this.props.next}
            className="btn btn-sm btn-primary m-2"
            disabled={this.isLast(this.props.counter)}
          >
            Next
          </button>
          <button
            onClick={this.props.showAnswerFn}
            className="btn btn-sm btn-primary m-2"
          >
            {this.props.showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
          <NavLink exact to="/quiz/result">
            <button type="button" className="btn btn-sm btn-info m-2">
              Submit
            </button>
          </NavLink>
        </div>
        <hr></hr>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    showAnswer: state.showAnswer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    prev: () => dispatch({ type: "PREV" }),
    next: () => dispatch({ type: "NEXT" }),
    showAnswerFn: () => dispatch({ type: "SHOW_ANSWER" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNavigation);
