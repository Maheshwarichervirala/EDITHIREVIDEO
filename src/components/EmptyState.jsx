import { Link } from "react-router-dom";

function EmptyState({ icon, title, desc, link, linkText }) {
  return (
    <div className="text-center py-24">
      <p className="text-6xl mb-5">{icon}</p>
      <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto">{desc}</p>
      {link && (
        <Link
          to={link}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}

export default EmptyState;