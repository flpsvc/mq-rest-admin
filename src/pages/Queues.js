import styles from '../components/Queues.module.css'

function Queues({name, type, depth, environment}){
    return(
    <div>
        <nav>
        <table className={styles.queuesTable}>
            <tr>
                <th>queue name</th>
                <th>type</th>
                <th>depth</th>
                <th>environment</th>
            </tr>            
        </table>
        </nav>
    </div>
    )
}

export default Queues