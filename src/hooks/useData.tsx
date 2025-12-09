import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = React.useState<T[]>([]);
  const [error, setError] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
}

export default useData;
