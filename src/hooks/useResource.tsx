import { useEffect, useState } from "react";
import { API_BASE_URL, POLLING_MS } from "../constants";
import { HealthStatus, ResourceType } from "../type";

const useResource = (type: ResourceType) => {
  const [data, setData] = useState<HealthStatus>({
    success: false,
    message: "Loading...",
    hostname: "N/A",
    time: Date.now(),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}${type}/health/status`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData({
          success: false,
          message: "Error fetching data",
          hostname: "Outage",
          time: Date.now(),
        });
        setLoading(false);
      });

    const interval = setInterval(() => {
      fetch(`${API_BASE_URL}${type}/health/status`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setData({
            success: false,
            message: "Error fetching data",
            hostname: "Outage",
            time: Date.now(),
          });
          setLoading(false);
        });
    }, POLLING_MS);
    return () => clearInterval(interval);
  }, [type]);

  return { data, loading };
};

export default useResource;
