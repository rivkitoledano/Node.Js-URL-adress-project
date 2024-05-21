import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const ClicksByDayChart = ({ userId }) => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3000/users/${userId}/clicks-by-day`);
      const clicksByDay = result.data.clicksByDay;

      const labels = Object.keys(clicksByDay);
      const values = Object.values(clicksByDay);

      setData({
        labels,
        datasets: [
          {
            label: 'Clicks by Day',
            data: values,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 0.6)',
            tension: 0.1,
          },
        ],
      });
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>Clicks by Day</h2>
      <Line data={data} />
    </div>
  );
};

export default ClicksByDayChart;
