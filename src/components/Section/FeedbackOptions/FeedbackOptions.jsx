import PropTypes from 'prop-types';
import styles from "./feedbackOptions.module.css"
const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <ul className={styles.btnList}>
            <li className={styles.btnListItem}><button onClick={()=>onLeaveFeedback("good")} type="button">good</button></li>
            <li className={styles.btnListItem}><button onClick={()=>onLeaveFeedback("neutral")} type="button">neutral</button></li>
            <li className={styles.btnListItem}><button onClick={()=>onLeaveFeedback("bad")} type="button">bad</button></li>
        </ul>
    )
}

export {FeedbackOptions}