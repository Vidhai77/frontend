import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import AssignTenderClientWrapper from "@/components/AssignTenderClientWrapper"; // new file!

export default function AssignTenderPage() {
  return (
    <div>
      <Navbar />
      <div className="container mt-8">
        <Suspense fallback={<p>Loading...</p>}>
          <AssignTenderClientWrapper />
        </Suspense>
      </div>
    </div>
  );
}
