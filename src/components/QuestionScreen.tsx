import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Question = {
  text: string;
};

type QuestionScreenProps = {
  questions: Question[];
};

const QuestionScreen = ({ questions }: QuestionScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const navigate = useNavigate();

  const handleAnswer = () => {
    setShowAnswer(true);
    setShowNextButton(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
      setShowNextButton(false);
    } else {
      navigate("/download");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 space-y-4">
        <h2 className="text-xl font-bold">{questions[currentQuestion].text}</h2>
        {showAnswer && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>Answer text</p>
          </div>
        )}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            onClick={handleAnswer}
          >
            Answer
          </button>
          {showNextButton && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;