const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-[#f28c8c] rounded-[1.5rem] p-3 flex flex-col shadow-lg border border-white/20 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
