import { useEffect, useState } from "react";
import "../App.css";

export const fetchHealthData = async (): Promise<string> => {
  try {
    const response = await fetch("http://127.0.0.1:8000/health");
    const data = await response.json();
    return data.uptime_seconds;
  } catch (error) {
    return "Error connecting to server";
  }
};

export const formatDuration = (time: string) => {
  const totalSeconds = parseInt(time, 10);
  if (isNaN(totalSeconds)) return time; // handle error message case

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

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
