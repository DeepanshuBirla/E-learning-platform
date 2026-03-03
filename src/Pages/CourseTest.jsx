import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../Data/coursesData.json";
import TestTimer from "../Components/TestTimer";

export default function CourseTest() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = data.courses.find((c) => c.slug === slug);

  if (!course || !course.test) {
    return <p className="text-center mt-10">Test not available</p>;
  }

  const questions = course.test.questions;
  const passPercentage = course.test.passPercentage;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (index) => {
    setAnswers({ ...answers, [current]: index });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    alert("Test Submitted!")
    const attempt = {
      courseSlug: slug,
      date: new Date().toLocaleString(),
      score,
      total: questions.length,
      percentage,
      passed,
    };

    if (passed) {
      const progress = JSON.parse(localStorage.getItem("courseProgress")) || {};

      if (!progress[slug]) {
        progress[slug] = { lessons: {}, testPassed: true };
      } else {
        progress[slug].testPassed = true;
      }

      localStorage.setItem("courseProgress", JSON.stringify(progress));
    }

    const history = JSON.parse(localStorage.getItem("testHistory")) || [];

    history.push(attempt);

    localStorage.setItem("testHistory", JSON.stringify(history));

    setSubmitted(true);
  };

  const score = questions.reduce((total, q, i) => {
    return total + (answers[i] === q.correctAnswer ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= passPercentage;

  // ===== RESULT SCREEN =====
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded shadow text-center max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Test Result</h2>

          <p className="text-lg mb-2">
            Score: <b>{score}</b> / {questions.length}
          </p>

          <p className="text-lg mb-4">
            Percentage: <b>{percentage}%</b>
          </p>

          {passed ? (
            <p className="text-green-600 font-semibold mb-4">
              ✅ Passed – Certificate Unlocked
            </p>
          ) : (
            <p className="text-red-600 font-semibold mb-4">
              ❌ Failed – Try Again
            </p>
          )}

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate(`/course/${slug}`)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Back to Course
            </button>

            {!passed && (
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Retry Test
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  // ===== TEST UI =====
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-2">📝 {course.title} – Test</h2>

        <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500 mb-4">
          Question {current + 1} of {questions.length}
        </p>

        {/* TIMER */}
        <TestTimer
          duration={10 * 60} // 10 minutes
          onTimeUp={handleSubmit}
        />
        </div>

        {/* QUESTION */}
        <h3 className="text-lg font-semibold mb-4">{q.question}</h3>

        {/* OPTIONS */}
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleOptionClick(i)}
              className={`w-full text-left p-3 rounded border
                ${
                  answers[current] === i
                    ? "bg-blue-100 border-blue-500"
                    : "hover:bg-gray-100"
                }
              `}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between mt-6">
          <button
            disabled={current === 0}
            onClick={() => setCurrent(current - 1)}
            className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>

          {current < questions.length - 1 ? (
            <button
              onClick={() => setCurrent(current + 1)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit Test
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
