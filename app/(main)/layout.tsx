import BottomNavigation from "@/components/bottom-navigation";

import { Suspense } from "react";
import Loading from "@/components/loading";

export default async function HomeLayout() {
  return (
    <Suspense fallback={<Loading />}>
      <BottomNavigation />;
    </Suspense>
  );
}
