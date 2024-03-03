"use client";

import { useEffect, useState } from "react";

export const LastUpdated = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  return (
    <section className="border-blue-400 -mx-4 mt-4 rounded border border-dashed p-4">
      <div>
        Last updated: <time>{new Date().toLocaleTimeString()}</time>
      </div>
    </section>
  );
};
