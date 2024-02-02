import styles from '../components/Channels.module.css'

function Channels({name, type, status, environment}){
    return(
    <div>
        <nav>
        <table className={styles.channelTable}>
            <tr>
                <th>channel name</th>
                <th>type</th>
                <th>status</th>
                <th>environment</th>
            </tr>            
        </table>
        </nav>
    </div>
    )
}

export default Channels