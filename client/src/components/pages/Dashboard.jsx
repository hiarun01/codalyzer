import {useState} from "react";
import {api} from "../../api/api";
import rehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";
import Loading from "../Loading";

const Dashboard = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleAnalysis = async () => {
    setLoading(true); // Start loading
    setResult(""); // Optionally clear previous result
    try {
      const response = await api.post(
        "/ai/code-review",
        {code},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setResult(response.data);
    } catch (error) {
      console.log("error", error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <>
      <main className="bg-[#111010] min-h-[83vh] lg:h-[80vh] py-5 px-2 md:px-5 flex flex-col lg:flex-row justify-center items-center gap-5">
        {/* Left section */}
        <div className="w-full lg:w-1/2 border border-[#5c5c5c] rounded-2xl h-auto lg:h-[80vh] sm:h-[50vh] flex flex-col justify-between p-4 md:p-6 mb-4 lg:mb-0">
          {/* Code section */}
          <div className="flex-1 flex flex-col">
            <label className="text-white mb-2 text-lg font-semibold text-left">
              Paste your code Here:
            </label>
            <textarea
              className="bg-[#181818] text-white rounded-lg p-4 h-60 md:h-full resize-none border border-[#333] focus:outline-none focus:border-red-700"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste or write your code here..."
              style={{minHeight: "200px"}}
            />
          </div>
          {/* Button */}
          <div className="mt-4 flex justify-end">
            <button
              className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 transition w-fit"
              onClick={handleAnalysis}
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Code Analyze"}
            </button>
          </div>
        </div>
        {/* Right section */}
        <div className="w-full lg:w-1/2 lg:h-[80vh] rounded-2xl bg-[#181818] border border-[#5c5c5c] p-4 md:p-6 overflow-auto">
          <label className="text-white mb-2 text-lg font-mono font-semibold text-left block">
            Analysis Result:
          </label>
          <div className="text-white whitespace-pre-wrap flex justify-center items-center ">
            {loading ? (
              <Loading />
            ) : !result ? (
              <div>Results will be shown here...</div>
            ) : (
              <div>
                <Markdown rehypePlugins={[rehypeHighlight]}>{result}</Markdown>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
