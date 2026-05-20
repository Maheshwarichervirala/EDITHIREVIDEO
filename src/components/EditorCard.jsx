import { Link } from "react-router-dom";

function EditorCard({ editor }) {
  return (
    <Link to={`/editor/${editor.id}`} className="group block">
      <div className="bg-gray-900 rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition duration-300 hover:shadow-xl hover:shadow-purple-900/20">

        {/* Cover image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={editor.cover}
            alt={editor.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40" />
          {editor.available ? (
            <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">
              Available
            </span>
          ) : (
            <span className="absolute top-4 right-4 bg-gray-600 text-white text-xs px-3 py-1.5 rounded-full font-medium">
              Busy
            </span>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="-mt-9 mb-4">
            <img
              src={editor.avatar}
              alt={editor.name}
              className="w-16 h-16 rounded-2xl border-4 border-gray-900 object-cover"
            />
          </div>

          <h3 className="text-white font-semibold text-lg">{editor.name}</h3>
          <p className="text-gray-400 text-sm mt-1">{editor.title}</p>
          <p className="text-gray-600 text-xs mt-2">📍 {editor.location}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {editor.skills.map((skill) => (
              <span
                key={skill}
                className="bg-purple-600/20 text-purple-400 text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-6 pt-5 border-t border-white/10">
            <div>
              <span className="text-yellow-400 text-sm font-medium">★ {editor.rating}</span>
              <span className="text-gray-600 text-xs ml-2">({editor.reviews} reviews)</span>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">₹{editor.price.toLocaleString("en-IN")}</p>
              <p className="text-gray-600 text-xs mt-0.5">per project</p>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}

export default EditorCard;