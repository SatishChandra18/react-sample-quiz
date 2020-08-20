import questions from "./questions";

const initialState = {
  questions: questions,

  counter: 0,

  answers: [],

  showAnswer: false
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_ANSWER") {
    let newAnswers = [...state.answers];
    console.log(newAnswers);
    newAnswers[action.index] = action.answer;
    console.log(newAnswers);
    return {
      ...state,
      answers: newAnswers
    };
  }
  if (action.type === "PREV") {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  if (action.type === "NEXT") {
    return {
      ...state,

      counter: state.counter + 1
    };
  }
  if (action.type === "SHOW_ANSWER") {
    return {
      ...state,

      showAnswer: !state.showAnswer
    };
  }
  return state;
};

export default reducer;
