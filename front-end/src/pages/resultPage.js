import testData from '../data/output.json'
import Link from '../components/Link';

import { useEffect, useRef, useState, useMemo } from 'react';
import renderPieChart from '../components/PieChart';
import './App.css';
import sample_data from '../data/output.json';

function ResultPage(props) {
  const { theLink, clicked } = props

  const [data, setData] = useState(testData);
  console.log({ theLink });
  useEffect(() => {
    async function fetchData() {
      const user_url = { theLink };
      console.log(user_url);
      console.log("fetch");
      const responseTest = await fetch("http://localhost:3000/api/", {
        method: "POST",
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify({ url: user_url.theLink })
      })

      //console.log( await responseTest.json());
      const temp = await responseTest.json();

      setData(temp);


      //const response = await fetch("http://localhost:3000/api/");
    }
    if (clicked) {
      fetchData();
    }
  }, [clicked]);

  const [chartReady, setChartReady] = useState(false);

  const counts = useMemo(() => {
    const result = {};
    data.problems.forEach((problem) => {
      const impactList = problem.impactList;
      if (impactList !== null) {
        result[impactList] = (result[impactList] || 0) + 1;
      }
    });
    return result;
  }, [data]);

  const chartContainer = useRef(null);

  useEffect(() => {
    setChartReady(true);
  }, []);

  useEffect(() => {
    if (chartReady) {
      const chart = renderPieChart(counts, chartContainer.current);

      // Return a cleanup function that destroys the chart to avoid memory leaks
      return () => chart.destroy();
    }
  }, [counts, chartReady]);


  return (
    <div className="App">
      <header className="App-header">
        <h2>Accessibility Impacts by Frequency</h2>
        {chartReady && (
          <canvas
            ref={chartContainer}
            style={{ width: '500px' }}
          ></canvas>
        )}
        <br></br>
        <Link to='/rawdata'>
          <button type='button'>Click here to view the data from the scan.</button>
        </Link>

      </header>
    </div>
  );

}
export default ResultPage;
