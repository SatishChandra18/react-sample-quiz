import React, { Component } from "react";
import { connect } from "react-redux";

class ResultTile extends Component {
  getAnswer(options) {
    let answer;
    options.map((val, index) => {
      if (val.isAnswer === true) {
        answer = options[index].name;
      }
      return null;
    });

    return answer;
  }

  render() {
    let key = 0;

    return this.props.questions.map((question, index) => {
      console.log(this.props.answer);
      return (
        <div key={question.id - 1000}>
          <p className="font-weight-bold">
            {" "}
            <strong> Q{question.id - 1000}.</strong> {question.name}{" "}
          </p>
          <div className="container">
            <div className="row">
              <form className=" ">
                {question.options.map((option) => {
                  return (
                    <div key={key++} className="form-check">
                      <input
                        className="form-check-input key"
                        type="radio"
                        checked={option.name === this.props.answers[index]}
                        disabled
                      />
                      <label className="form-check-label">{option.name}</label>
                    </div>
                  );
                })}
              </form>
            </div>
          </div>

          <div className="alert alert-dark p-1 mt-3 mb-2 w-100" role="alert">
            Right answer is :{" "}
            <strong>{this.getAnswer(question.options)}</strong>
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.answers,
    questions: state.questions
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateBonus: () => dispatch({ type: "UPDATE_BONUS", value: 100 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultTile);
