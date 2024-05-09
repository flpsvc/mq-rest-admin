import styles from './QueueManager.module.css'
import { useEffect, useState } from 'react';
import { apiBase } from './Api.js'

function EnvTi() {
  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    //fetch('https://course-api.com/react-store-products')
    fetch('http://localhost:9060' + apiBase + 'qmgr')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className={styles.divContent}>
        <h3>Queue Manager</h3>
        <h3>Status</h3>
      </div>
      {jsonData && (
        <div>
          {jsonData.qmgr.map(obj => (
            <div key={obj.id}>
              {obj.name.includes('TI') && (
                <div className={styles.divContent}>
                  <div>
                    <p>{obj.name}</p>
                  </div>
                  <div>
                    <p>{obj.state}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default EnvTi