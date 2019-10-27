const Loader = ({ size, color }) => {
  // clamps an int input to a value between lower and upper
  const clamp = (lower, upper) => input => {
    let output = input;
    if (input > upper) output = upper;
    if (input < lower) output = lower;
    return output;
  };
  const constrain = clamp(3, 14);
  return (
    <>
      <div></div>
      <style jsx>{`
        div {
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          border: ${constrain(size / 10)}px solid rgba(0, 0, 0, 0);
          border-top: ${constrain(size / 10)}px solid ${color};
          animation: loading-spinner 0.9s linear infinite;
        }
        @keyframes loading-spinner {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Loader;
