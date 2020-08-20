import React from "react";
import QuestionTile from "../component/questionTile";
import QuestionNavigation from "../component/questionNavigation";

export default function Home() {
  return (
    <div>
      <h1 className="text-white bg-dark p-5 text-center ">Cricket Quiz</h1>
      <QuestionTile />
      <QuestionNavigation />
    </div>
  );
}
