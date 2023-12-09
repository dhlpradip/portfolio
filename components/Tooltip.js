export const Tooltip = ({ message, children, background, isAtTop }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div
        className={`absolute ${
          isAtTop ? "bottom-12" : "top-12"
        } flex flex-col items-center hidden mb-0 group-hover:flex`}
      >
        {!isAtTop && (
          <div
            className="w-3 h-3 -mb-2 rotate-45 bg-gray-600"
            style={{ backgroundColor: `${background}` }}
          ></div>
        )}
        <span
          className={`relative z-10 p-2 text-md leading-none text-white whitespace-no-wrap shadow-lg rounded-md`}
          style={{ backgroundColor: `${background}` }}
        >
          {message}
        </span>
        {isAtTop && (
          <div
            className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"
            style={{ backgroundColor: `${background}` }}
          ></div>
        )}
      </div>
    </div>
  );
};
