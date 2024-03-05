import HomeContent from "../UI/HomeComponents/HomeContent";

import { useScrollToTop } from "../../hooks/useScrollToTop";

function HomePage() {
  useScrollToTop();

  return <HomeContent />;
}

export default HomePage;
