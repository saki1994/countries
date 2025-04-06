import { FadeLoader } from "react-spinners";

function Loader({ loading, theme }) {
  return (
    <div id="loader-container">
      <FadeLoader
        color={theme === "light" ? "black" : "white"}
        loading={loading}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h3>Fetching Countries...</h3>
    </div>
  );
}

export default Loader;
