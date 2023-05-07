import PropTypes from "prop-types";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import styles from "./NewExpense.module.css";

const NewExpense = (props) => {
    const saveExpenseHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString(),
        };
        props.onExpenseAdd(expenseData);
    };

    return (
        <div className={styles["new-expense"]}>
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    );
};

NewExpense.propTypes = {
    onExpenseAdd: PropTypes.func,
};

export default NewExpense;
