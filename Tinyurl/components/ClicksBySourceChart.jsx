import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const ClicksBySourceChart = ({ linkId }) => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3000/links/${linkId}/click-stats`);
      const clickStats = result.data.clickStats;

      const labels = Object.keys(clickStats);
      const values = Object.values(clickStats);

      setData({
        labels,
        datasets: [
          {
            label: 'Clicks by Source',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            border
}
],
});
};

fetchData();
}, [linkId]);

return (
<div>
<h2>Clicks by Source</h2>
<Bar
data={data}
options={{
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}}
/>
</div>
);
};

export default ClicksBySourceChart;
