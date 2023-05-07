import PropTypes from "prop-types";
import styles from "./ExpenseDate.module.css";

const ExpenseDate = ({ date }) => {
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();

    return (
        <div className={styles["expense-date"]}>
            <div className={styles["expense-date__month"]}>
                {month.toUpperCase()}
            </div>
            <div className={styles["expense-day"]}>{day}</div>
            <div className={styles["expense-date__year"]}>{year}</div>
        </div>
    );
};

ExpenseDate.propTypes = {
    date: PropTypes.instanceOf(Date),
};

export default ExpenseDate;
