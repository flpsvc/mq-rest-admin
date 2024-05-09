import styles from './QueueManager.module.css'
import { useEffect, useState } from 'react';
import { apiBase } from './Api.js'

function EnvHo(){
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
                    {obj.name.includes('HAH') && (
                        <tbody>
                            <tr>
                                <th>{obj.name}</th>
                                <th>{obj.state}</th>
                            </tr>
                        </tbody>
                    )} 
                </table>
            </div>
          ))}
        </div>   
    )}
    </>
  );
}

export default EnvHo