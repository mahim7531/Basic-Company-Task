import React, { useEffect, useState } from "react";
import axios from "axios";

// Public API: https://jsonplaceholder.typicode.com/posts

const ApiDataFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // API CALL
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res.data);
        setError(null);
      } catch (err) {
        setError("Data fetch failed!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // SEARCH FILTER
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // PAGINATION LOGIC
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // CONDITIONAL RENDERING
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>API Data Fetching</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      {/* DATA LIST */}
      {currentItems.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "8px" }}
        >
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}

      {/* PAGINATION */}
      <div style={{ marginTop: "10px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApiDataFetching;
