/* TECH STACK MODAL */
export function HighlightModal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center animate-fadeIn">
      <div className="w-11/12 max-w-md bg-white rounded-3xl p-5 relative shadow-xl">
        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold text-center">{title}</h2>

        {/* Modal Content */}
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
