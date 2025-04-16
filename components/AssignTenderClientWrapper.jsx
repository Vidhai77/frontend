"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AssignTenderComponent = dynamic(
  () => import("@/components/AssignTenderComponent"),
  { ssr: false }
);

export default function AssignTenderClientWrapper() {
  const searchParams = useSearchParams();
  const [projectId, setProjectId] = useState(null); // removed type

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) setProjectId(id);
  }, [searchParams]);

  if (!projectId) return <p>Loading...</p>;

  return <AssignTenderComponent projectId={projectId} />;
}
