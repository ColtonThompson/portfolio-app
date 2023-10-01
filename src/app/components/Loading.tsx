import "../loading.css";

export default function Loading() {
    return (
      <div className="flex mx-auto items-center justify-center space-x-5">
          <h3 className="text-white">Loading...</h3>
          <div className="spinner-container">
            <div className="loading-spinner">
            </div>
          </div>
        </div>
      );
}