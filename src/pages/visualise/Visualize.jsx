import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useParams } from "react-router-dom";

const Visualize = ({ }) => {
    const fileId = useParams()
  const [dataset, setDataset] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataset = async () => {
        try {
          const response = await fetch(`http://localhost:5000/fetch-dataset/${fileId.fileId}`, {
            method: "GET",
          });
    
          if (response.ok) {
            const data = await response.json();
    
            // Check if the response is a valid dataset
            if (Array.isArray(data) && data.length > 0) {
              setDataset(data);
            } else {
              console.error("Invalid dataset structure:", data);
              alert("The dataset is empty or invalid.");
            }
          } else {
            console.error("Failed to fetch dataset.");
            alert("Failed to fetch the dataset.");
          }
        } catch (err) {
          console.error("Error fetching dataset:", err);
          alert("An error occurred while fetching the dataset.");
        } finally {
          setIsLoading(false);
        }
      };

    fetchDataset();
  }, [fileId]);

  if (isLoading) {
    return <p>Loading dataset...</p>;
  }

  return (
    <div>
      <h2>Dataset Viewer</h2>
      <DataTable
        columns={Object.keys(dataset[0] || {}).map((key) => ({
          name: key,
          selector: (row) => row[key],
          sortable: true,
        }))}
        data={dataset}
        pagination
        highlightOnHover
        selectableRows
      />
    </div>
  );
};

export default Visualize;
