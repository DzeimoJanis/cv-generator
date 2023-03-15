import React from "react";
import { useNavigate } from "react-router-dom";

function FinishScreen() {
    const navigate = useNavigate();

    function onDownload() {
        console.log("downloaded");
    }
    
    function onStart() {
        navigate("/");
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p className="mb-6">
          You have successfully completed the quiz. Please download your
          certificate below:
        </p>
        <button
          onClick={onDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Download Certificate
        </button>
        <button
          onClick={onStart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          To Start
        </button>
      </div>
    </div>
  );
}

export default FinishScreen;