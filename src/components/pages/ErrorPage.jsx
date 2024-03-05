import ErrorContent from "../UI/ErrorComponents/ErrorContent";

import { useScrollToTop } from "../../hooks/useScrollToTop";

function ErrorPage() {
  useScrollToTop();

  return <ErrorContent />;
}

export default ErrorPage;
