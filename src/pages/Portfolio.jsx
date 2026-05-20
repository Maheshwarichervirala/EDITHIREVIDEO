import { useState } from "react";
import VideoCard from "../components/VideoCard";
import videos from "../data/videos";

const categories = ["All", "Commercial", "Wedding", "Music", "Corporate", "Documentary"];

function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? videos
    : videos.filter((v) => v.category === active);

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-purple-400 text-xs tracking-widest uppercase mb-3">My Work</p>
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <p className="text-gray-500 mt-3">A collection of my best video work</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-purple-600 text-white"
                  : "border border-white/20 text-gray-400 hover:border-purple-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Portfolio;