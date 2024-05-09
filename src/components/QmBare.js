import styles from './QueueManager.module.css'
import { useEffect, useState } from 'react';
import { apiBase, apiBare } from './Api.js'

function QmBare(env) {
  const [jsonQm, setjsonQm] = useState(null);
  useEffect(() => {
    //fetch('https://course-api.com/react-store-products')
    fetch('http://localhost:9060' + apiBase + 'qmgr')
      .then(response => response.json())
      .then(data => setjsonQm(data))
      .catch(error => console.error(error));
  }, []);

  const [jsonChl, setjsonChl] = useState(null);
  useEffect(() => {
    //fetch('https://course-api.com/react-store-products')
    fetch('http://localhost:9060' + apiBare + 'channel')
      .then(response => response.json())
      .then(data => setjsonChl(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <th className={styles.thTitles}>Queue Manager</th>
              <th className={styles.thTitles}>Listener</th>
              <th className={styles.thTitles}>Channel</th>
              <th className={styles.thTitles}>Host</th>
            </tr>
          </tbody>
        </table>
      </div>

      {jsonQm && (
        <div>
          {jsonQm.qmgr.map(obj => (
            <>
              {obj.name.includes('TU') && obj.name.includes('BARE') && (
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <th className={styles.thTitles}>{obj.name}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {jsonChl && (
        <div>
          {jsonChl.channel.map(obj => (
            <>
              {obj.name && (
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <th className={styles.thTitles}>{obj.name}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default QmBare