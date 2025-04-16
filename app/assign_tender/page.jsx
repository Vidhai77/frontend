"use client"; // Mark as client-side component

import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import Navbar from "@/components/Navbar"; // Import Navbar
import { useSearchParams } from "next/navigation";

// Dynamically import the AssignTenderComponent with SSR disabled
const AssignTenderComponent = dynamic(
  () => import("@/components/AssignTenderComponent"),
  { ssr: false }
);

export default function AssignTenderPage() {
  const searchParams = useSearchParams();
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setProjectId(id);
    }
  }, [searchParams]);

  return (
    <div>
      <Navbar /> {/* Include the Navbar */}
      <div className="container mt-8">
        <Suspense fallback={<p>Loading...</p>}>
          {projectId ? (
            <AssignTenderComponent projectId={projectId} />
          ) : (
            <p>Loading...</p>
          )}
        </Suspense>
      </div>
    </div>
  );
}
