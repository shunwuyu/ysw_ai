function useInterval(callback, delay) {
  const intervalId = setInterval(callback, delay);
  return () => clearInterval(intervalId);
}

export default useInterval;