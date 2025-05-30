import {useState} from "react";

const Dashboard = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleAnalysis = async () => {};
  return (
    <>
      <main className="bg-[#111010] min-h-[83vh] py-5 px-2 md:px-5 flex flex-col lg:flex-row justify-center items-center gap-3">
        {/* Left section */}
        <div className="w-full lg:w-1/2 border border-[#5c5c5c] rounded-2xl h-auto lg:h-[80vh] flex flex-col justify-between p-4 md:p-6 mb-4 lg:mb-0">
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
              className="rounded-md bg-red-700 px-8 py-2.5 text-sm font-medium text-white hover:bg-red-800 transition w-fit"
              onClick={handleAnalysis}
            >
              Analyze
            </button>
          </div>
        </div>
        {/* Right section */}
        <div className="w-full lg:w-1/2 h-auto lg:h-[80vh] rounded-2xl bg-[#181818] border border-[#5c5c5c] p-4 md:p-6 overflow-auto">
          <label className="text-white mb-2 text-lg font-semibold text-left block">
            Analysis Result:
          </label>
          <div className="text-white whitespace-pre-wrap">
            {result || "Results will be shown here..."}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
