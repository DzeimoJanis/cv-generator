import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to the Quiz</h1>
        <Link
          to="/questions"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;