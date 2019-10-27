const ErrorBox = ({ message, handleDismiss }) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => handleDismiss()}>Dismiss</button>
    </div>
  );
};

export default ErrorBox;
