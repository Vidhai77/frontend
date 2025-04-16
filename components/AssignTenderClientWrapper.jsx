"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Dynamic import
const AssignTenderComponent = dynamic(
  () => import("@/components/AssignTenderComponent"),
  { ssr: false }
);

export default function AssignTenderClientWrapper() {
  const searchParams = useSearchParams();
  const [projectId, setProjectId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) setProjectId(id);
  }, [searchParams]);

  if (!projectId) return <p>Loading...</p>;

  return <AssignTenderComponent projectId={projectId} />;
}
