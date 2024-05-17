const formatData = (questionDatat) => {
  // console.log(questionDatat);
  const result = questionDatat.map((item) => {
    const questionObject = { question: item.question };
    const answers = [...item.incorrect_answers];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(correctAnswerIndex, 0, item.correct_answer);
    questionObject.answers = answers;
    questionObject.correctAnswerIndex = correctAnswerIndex;
    // console.log(correcAnswerIndex);
    return questionObject;
  });
  return result;
};

export default formatData;
