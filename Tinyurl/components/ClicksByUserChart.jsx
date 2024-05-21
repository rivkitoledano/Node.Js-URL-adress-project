import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const ClicksByUserChart = ({ userId }) => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3000/users/${userId}/click-stats`);
      const clickStats = result.data.clickStats;

      const labels = Object.keys(clickStats);
      const values = Object.values(clickStats);

      setData({
        labels,
        datasets: [
          {
            label: 'Clicks by User',
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>Clicks by User</h2>
      <Pie data={data} />
    </div>
  );
};

export default ClicksByUserChart;
