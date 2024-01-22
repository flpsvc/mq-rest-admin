import styles from './Queues.module.css'

function Queues({name, type, depth}){
    return(
    <div>
        <nav>
        <table className={styles.queuesTable}>
            <tr>
                <th>queue name</th>
                <th>type</th>
                <th>depth</th>
            </tr>            
        </table>
        </nav>
    </div>
    )
}

export default Queues