import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./ExpenseForm.module.css";

const initialState = {
    title: "",
    amount: 0,
    date: "",
};

const ExpenseForm = (props) => {
    const [state, setState] = useState(initialState);

    const onChangeHandler = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const date = new Date(state.date);
        props.onSaveExpense({ ...state, date });
        setState(initialState);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles["new-expense__controls"]}>
                <div className={styles["new-expense__control"]}>
                    <label className={styles["new-expense__control__label"]}>
                        Title
                    </label>
                    <input
                        onChange={onChangeHandler}
                        className={styles["new-expense__control__input"]}
                        type="text"
                        value={state.title}
                        name="title"
                    />
                </div>
                <div className={styles["new-expense__control"]}>
                    <label className={styles["new-expense__control__label"]}>
                        Amount
                    </label>
                    <input
                        className={styles["new-expense__control__input"]}
                        type="number"
                        value={state.amount}
                        min={0.01}
                        step={0.01}
                        onChange={onChangeHandler}
                        name="amount"
                    />
                </div>
                <div className={styles["new-expense__control"]}>
                    <label className={styles["new-expense__control__label"]}>
                        Date
                    </label>
                    <input
                        className={styles["new-expense__control__input"]}
                        type="date"
                        min="2020-01-01"
                        max="2022-12-31"
                        value={state.date}
                        onChange={onChangeHandler}
                        name="date"
                    />
                </div>
            </div>
            <div className={styles["new-expense__actions"]}>
                <button className={styles["new-expense__cta"]} type="submit">
                    Add Expense
                </button>
            </div>
        </form>
    );
};

ExpenseForm.propTypes = {
    onSaveExpense: PropTypes.func,
};

export default ExpenseForm;
