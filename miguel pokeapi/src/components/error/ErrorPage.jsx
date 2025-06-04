import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-card">
        <h1 className="error-status">{error.status || "Error"}</h1>
        <h2 className="error-status-text">
          {error.statusText || "A problem ocurred."}
        </h2>

        <div className="error-details">
          <p>
            <strong>Details:</strong>
          </p>
          <pre className="error-json">
            {error.data || "No additional info."}
          </pre>
        </div>

        <Link href="/" className="error-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
