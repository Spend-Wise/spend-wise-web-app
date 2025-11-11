import { useEffect, useState } from "react";
import "../App.css";
import { fetchHealthData, formatDuration } from "../utils/healthCheckUtils.ts";

const HealthCheck = () => {
  const [uptime, setUptime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getHealth = async () => {
    setIsLoading(true);
    const result = await fetchHealthData();
    setUptime(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getHealth();
  }, []);

  return (
    <div>
      <h1>Health Check</h1>
      {isLoading ? "Loading..." : <>Up for: {formatDuration(uptime)}</>}
    </div>
  );
};

export default HealthCheck;
