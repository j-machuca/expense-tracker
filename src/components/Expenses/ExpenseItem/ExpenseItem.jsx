// Libraries
import { useState } from "react";
import PropTypes from "prop-types";

// Components
import Card from "../../Card/Card";
import ExpenseDate from "./ExpenseDate/ExpenseDate";

// Styles
import styles from "./ExpenseItem.module.css";

// Component

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    return (
        <Card className={styles["expense-item"]}>
            <>
                <ExpenseDate date={props.date} />
                <div className={styles["expense-item__description"]}>
                    <h2>{title}</h2>
                </div>
                <div className={styles["expense-item__price"]}>
                    $ {props.amount}
                </div>
            </>
        </Card>
    );
};

// PropTypes

ExpenseItem.propTypes = {
    date: PropTypes.instanceOf(Date),
    amount: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
};

export default ExpenseItem;
