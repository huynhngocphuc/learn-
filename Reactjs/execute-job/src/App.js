import logo from "./logo.svg";

import "./App.css";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import React, { useState, useEffect } from "react";

function App() {
  const handleSubmit = () => {
    fetchProducts()
  };

  const fetchProducts = async () => {
    try {
      const products = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => json);

      console.log("🚀 ~ fetchProducts ~ products:", products);
    } catch (error) {}
  };
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Hàm giả lập gọi API
  const callApi = async (jobId) => {
    try {
      // Tạo độ trễ ngẫu nhiên từ 3000 đến 10000 (3-10 giây)
      const delay = Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;

      // Giả lập thời gian chờ lâu với setTimeout
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5
            ? resolve({ id: jobId, data: `Kết quả từ job ${jobId}` })
            : reject(new Error(`Job ${jobId} thất bại`));
        }, delay); // Sử dụng độ trễ ngẫu nhiên
      });

      return { status: "success", result: response };
    } catch (error) {
      return { status: "failure", error: error.message };
    }
  };
  // const callApi = async (jobId) => {
  //   try {
  //     // Tạo độ trễ ngẫu nhiên từ 3000 đến 10000 (3-10 giây)
  //     const delay = Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;

  //     // Giả lập thời gian chờ lâu với setTimeout
  //     const response = await new Promise((resolve, reject) => {
  //       setTimeout(async () => {
  //         try {
  //           // Thực hiện gọi API thực tế
  //           const res = await fetch("https://fakestoreapi.com/products");
  //           if (!res.ok) {
  //             throw new Error("API gọi thất bại");
  //           }
  //           const data = await res.json();
  //           resolve({ id: jobId, data: data });
  //         } catch (error) {
  //           reject(new Error(`Job ${jobId} thất bại: ${error.message}`));
  //         }
  //       }, delay); // Sử dụng độ trễ ngẫu nhiên
  //     });

  //     return { status: "success", result: response };
  //   } catch (error) {
  //     return { status: "failure", error: error.message };
  //   }
  // };

  // Hàm chạy job mới
  const executeJob = async () => {
    const jobId = jobs.length + 1; // ID cho job mới
    setJobs((prevJobs) => [
      ...prevJobs,
      { id: jobId, status: "pending", result: null },
    ]);

    // Gọi API
    const result = await callApi(jobId);

    // Cập nhật kết quả khi có dữ liệu trả về
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.map((job) =>
        job.id === jobId
          ? { ...job, status: result.status, result: result.result || result.error }
          : job
      );
      // Lưu kết quả vào localStorage
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      return updatedJobs;
    });
  };
  useEffect(() => {
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);
  return (
    <div className="App">
       <div>
      <h1>Gọi API đồng thời</h1>
      <button onClick={executeJob} disabled={loading}>
        {loading ? "Đang xử lý..." : "Submit"}
      </button>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            Job {job.id} - 
            {job.status === "pending" && <span>⏳ Đang chờ...</span>}
            {job.status === "success" && (
              <span style={{ color: "green" }}>✅ Thành công: {job.result.data}</span>
            )}
            {job.status === "failure" && (
              <span style={{ color: "red" }}>❌ Thất bại: {job.result}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
