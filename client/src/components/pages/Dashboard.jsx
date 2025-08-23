import {useEffect, useState} from "react";
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
      <main className="bg-[#111010] min-h-screen flex flex-col items-center px-2 md:px-0 py-2 gap-5">
        {/* Result Section */}
        <section
          className="w-full max-w-5xl flex-1 rounded-2xl bg-[#18181b] border border-[#232323] p-4 md:p-6 shadow-lg flex flex-col overflow-auto hide-scrollbar"
          style={{minHeight: "220px", maxHeight: "75vh"}}
        >
          <div className="text-gray-100 whitespace-pre-wrap flex-1 flex justify-center items-center">
            {loading ? (
              <Loading />
            ) : !result ? (
              <span className="text-gray-500">
                Results will be shown here...
              </span>
            ) : (
              <div className="w-full">
                <Markdown rehypePlugins={[rehypeHighlight]}>{result}</Markdown>
              </div>
            )}
          </div>
        </section>
        {/* Input Section */}
        <section className="w-full max-w-5xl rounded-2xl border border-[#232323] bg-[#18181b] shadow-lg p-3 flex flex-col gap-2 sticky bottom-0">
          <textarea
            className="bg-[#101012] text-gray-200 rounded-lg p-3 resize-none border border-[#232323] focus:outline-none focus:border-red-700 transition min-h-[48px] max-h-32"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste or write your code here..."
            disabled={loading}
            rows={2}
          />
          <div className="flex justify-center">
            <button
              className="rounded-md bg-red-700 px-5 lg:px-10 py-2.5 text-sm font-extrabold text-white hover:bg-red-800 transition w-fit shadow disabled:opacity-60"
              onClick={handleAnalysis}
              disabled={loading || !code.trim()}
            >
              {loading ? "Analyzing..." : "Code Analyze"}
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
