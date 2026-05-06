import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const RefreshGuard = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the navigation type from the browser
    const entries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    
    // Check if the first entry is a "reload"
    if (entries.length > 0 && entries[0].type === "reload") {
      navigate("/");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default RefreshGuard;