import PropTypes from "prop-types";

import styles from "./ExpenseFilter.module.css";

const ExpensesFilter = (props) => {
    return (
        <div className={styles["expenses-filter"]}>
            <div className={styles["expenses-filter__control"]}>
                <label className={styles["expenses-filter__label"]}>
                    Filter by year
                </label>
                <select
                    className={styles["expenses-filter__select"]}
                    onChange={props.onFilterChange}
                >
                    <option value="">All</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

ExpensesFilter.propTypes = {
    onFilterChange: PropTypes.func,
};

export default ExpensesFilter;
