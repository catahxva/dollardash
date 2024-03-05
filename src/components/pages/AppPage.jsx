import AppContent from "../UI/AppComponents/AppContent";

import { useScrollToTop } from "../../hooks/useScrollToTop";

function AppPage() {
  useScrollToTop();

  return <AppContent />;
}

export default AppPage;
