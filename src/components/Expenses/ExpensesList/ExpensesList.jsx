import PropTypes from "prop-types";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import styles from "./ExpensesList.module.css";

const ExpensesList = (props) => {
    const expensesList =
        props.expenses.length === 0 ? (
            <p className={styles["expenses-list__fallback"]}>
                No Expenses found
            </p>
        ) : (
            props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
        );

    return <ul className={styles["expenses-list"]}>{expensesList}</ul>;
};

ExpensesList.propTypes = {
    expenses: PropTypes.arrayOf(Object),
};

export default ExpensesList;
