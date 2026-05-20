import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-gray-900 aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">▶</span>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-purple-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
            {video.category}
          </span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-white font-medium">{video.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{video.client} · {video.year}</p>
      </div>
    </Link>
  );
}

export default VideoCard;