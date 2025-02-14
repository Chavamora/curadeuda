import BottomNavigation from "@/components/bottom-navigation";

import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import Loading from "@/components/loading";
async function getResponse(timeout = 1000) {
  const response = await new Promise(() => {
    setTimeout(() => {
      currentUser();
    }, timeout);
  });

  return response;
}

export default async function HomeLayout() {
  const user = await currentUser();
  const username = user?.username;
  if (!user) return <div>Not signed in</div>;

  return (
    <Suspense fallback={<Loading />}>
      <BottomNavigation currentUser={username} />;
    </Suspense>
  );
}
