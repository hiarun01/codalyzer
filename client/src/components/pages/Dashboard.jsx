import {useState} from "react";
import "../../index.css";
import {api} from "../../api/api";
import rehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";
import Loading from "../Loading";
import Header from "../Header";

const Dashboard = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleAnalysis = async () => {
    setLoading(true);
    setResult("");
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
      <Header />
      <main className="bg-[#111010] min-h-screen py-4 px-2 md:px-6 flex flex-col lg:flex-row justify-center items-stretch gap-6">
        {/* Left section */}
        <section className="w-full lg:w-1/2 border border-[#232323] rounded-2xl h-[87vh] flex flex-col justify-between p-6 bg-[#18181b] shadow-lg">
          <label className="text-white mb-3 text-lg font-semibold text-left">
            Paste your code Here:
          </label>
          <div className="flex-1 flex flex-col">
            <textarea
              className="bg-[#101012] text-gray-200 rounded-lg p-4 h-60 md:h-full resize-none border border-[#232323] focus:outline-none focus:border-red-700 transition"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste or write your code here..."
              style={{minHeight: "200px"}}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 transition w-fit shadow"
              onClick={handleAnalysis}
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Code Analyze"}
            </button>
          </div>
        </section>
        {/* Right section */}
        <section className="w-full lg:w-1/2 h-[87vh] rounded-2xl bg-[#18181b] border border-[#232323] p-6 overflow-auto shadow-lg flex flex-col scrollbar-none">
          <label className="text-white mb-3 text-lg font-mono font-semibold text-left block">
            Analysis Result:
          </label>
          <div className="border-b border-[#232323] mb-4" />
          <div className="text-gray-100 whitespace-pre-wrap flex-1 flex justify-center items-center">
            {loading ? (
              <Loading />
            ) : !result ? (
              <span className="text-gray-500">
                Results will be shown here...
              </span>
            ) : (
              <div className="">
                <Markdown rehypePlugins={[rehypeHighlight]}>
                  {code === "" ? setResult("") : result}
                </Markdown>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
