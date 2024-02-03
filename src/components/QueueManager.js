import styles from './QueueManager.module.css'
import { useEffect, useState } from 'react';

var apiBase = "/ibmmq/rest/v1/admin/"

function QueueManager(){  
  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
      //fetch('https://course-api.com/react-store-products')
      fetch('http://localhost:9060'+apiBase+'qmgr')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <>
     <table className={styles.queueManagerTitleTable}>
          <tbody>
            <tr>
              <th>qmgr name</th>
              <th>state</th>
            </tr>
          </tbody>
      </table>
    {jsonData && (
        <div className={styles.objs}>
          {jsonData.qmgr.map(obj => (
          <div key={obj.id}>  
          <table className={styles.queueManagerTable}>         
          <tbody>
            <tr>
              <th>{obj.name}</th>
              <th>{obj.state}</th>
            </tr>
          </tbody>
          </table>
          </div>
          ))}
        </div>   
    )}
    </>
  );
};
 
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