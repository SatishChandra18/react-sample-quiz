import React from "react";
import { connect } from "react-redux";

class QuestionTile extends React.Component {
  isChecked(option, answer) {
    if (option === answer) return true;
    else return false;
  }

  getAnswer(value) {
    let answer;
    value.options.map((val, index) => {
      if (val.isAnswer === true) {
        answer = val.name;
      }
      return null;
    });

    return answer;
  }

  render() {
    console.log(this.props.showAnswer);
    return (
      <div className="container mt-5">
        <span className="badge badge-primary">
          Question {this.props.counter + 1} of 10
        </span>
        <h5 className="mt-2">
          {" "}
          <strong>Q.{this.props.counter + 1}</strong>{" "}
          {this.props.questions[this.props.counter].name}
        </h5>
        <form>
          <div className="row mt-2">
            <div className="col-6">
              <div>
                <input
                  type="radio"
                  name="answer"
                  onChange={(e) =>
                    this.props.updateAnswer(this.props.counter, e.target.value)
                  }
                  checked={this.isChecked(
                    this.props.questions[this.props.counter].options[0].name,
                    this.props.answers[this.props.counter]
                  )}
                  value={
                    this.props.questions[this.props.counter].options[0].name
                  }
                />
                <label>
                  {this.props.questions[this.props.counter].options[0].name}
                </label>
              </div>
            </div>
            <div className="col-6">
              <div>
                <input
                  type="radio"
                  name="answer"
                  onChange={(e) =>
                    this.props.updateAnswer(this.props.counter, e.target.value)
                  }
                  checked={this.isChecked(
                    this.props.questions[this.props.counter].options[1].name,
                    this.props.answers[this.props.counter]
                  )}
                  value={
                    this.props.questions[this.props.counter].options[1].name
                  }
                />
                <label>
                  {this.props.questions[this.props.counter].options[1].name}
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <div>
                <input
                  type="radio"
                  name="answer"
                  onChange={(e) =>
                    this.props.updateAnswer(this.props.counter, e.target.value)
                  }
                  checked={this.isChecked(
                    this.props.questions[this.props.counter].options[2].name,
                    this.props.answers[this.props.counter]
                  )}
                  value={
                    this.props.questions[this.props.counter].options[2].name
                  }
                />
                <label>
                  {this.props.questions[this.props.counter].options[2].name}
                </label>
              </div>
            </div>
            <div className="col-6">
              <div>
                <input
                  type="radio"
                  name="answer"
                  onChange={(e) =>
                    this.props.updateAnswer(this.props.counter, e.target.value)
                  }
                  checked={this.isChecked(
                    this.props.questions[this.props.counter].options[3].name,
                    this.props.answers[this.props.counter]
                  )}
                  value={
                    this.props.questions[this.props.counter].options[3].name
                  }
                />
                <label>
                  {this.props.questions[this.props.counter].options[3].name}
                </label>
              </div>
            </div>
          </div>
        </form>
        {this.props.showAnswer && (
          <p>
            Answer is :{" "}
            {this.getAnswer(this.props.questions[this.props.counter])}
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    questions: state.questions,
    answers: state.answers,
    showAnswer: state.showAnswer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAnswer: (index, answer) =>
      dispatch({
        type: "UPDATE_ANSWER",
        index: index,
        answer: answer
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTile);
