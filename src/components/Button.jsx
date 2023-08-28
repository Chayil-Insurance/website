const Button = ({ type, name }) => {
  return (
    <button
      type={type}
      className="rounded-xl bg-blue-500 px-5 py-2 text-base mb-3 font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700"
    >
      {name}
    </button>
  );
};

export default Button;
