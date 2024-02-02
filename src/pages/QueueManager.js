import styles from '../components/QueueManager.module.css'
import { useEffect, fetchData, useState } from 'react';
import axios from 'axios';

function QueueManager(){  
  const [jsonData, setJsonData] = useState(null);
  var apiBase = "/ibmmq/rest/v1/admin/"
  useEffect(() => {
      //fetch('https://course-api.com/react-store-products')
      fetch('http://localhost:9060/ibmmq/rest/v1/admin/qmgr')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <table className={styles.queueManagerTable}>
        <tbody>
          <tr>
            <th>qmgr name</th>
            <th>state</th>
          </tr>
        </tbody>
        <tbody>
          {jsonData && (
            <tr>
              {jsonData.qmgr.map(obj => (
                <th key={obj.id}>{obj.name}</th>
              ))}
              {jsonData.qmgr.map(obj => (
                <th key={obj.id}>{obj.state}</th>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


export default QueueManager;

  
  
  /*const items = ['item1', 'item 2', 'item3', 'item4']    
  return(    
    <div>
      <nav>
      <table className={styles.queueManagerTable}>
          <tr>
            <th>queue name</th>
            <th>type</th>
            <th>depth</th>
            <th>ambiente</th>
          </tr> 
          <tr>
            {items.map((component, index) => (
              <th key={index}>{component}</th>              
            ))}
          </tr>           
      </table>
      </nav>
    </div>
  )
}


export default QueueManager;*/
























/*const url = 'https://course-api.com/react-store-products';

const QueueManager = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};*/