import { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import styles from "./Expenses.module.css";
import NewExpense from "./NewExpense/NewExpense";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";

const initialState = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const Expenses = () => {
    const [expenses, setExpenses] = useState(initialState);

    const [filterYear, setFilterYear] = useState();

    const filteredExpenses = filterYear
        ? expenses.filter((expense) => expense.date.getFullYear() == filterYear)
        : expenses;

    const onExpenseAddHandler = (expenseData) => {
        setExpenses((prevState) => {
            return [expenseData, ...prevState];
        });
    };

    const onFilterChange = (e) => {
        setFilterYear(e.target.value);
    };

    return (
        <>
            <ExpensesFilter onFilterChange={onFilterChange} />
            <Card className={styles.expenses}>
                <>
                    <NewExpense onExpenseAdd={onExpenseAddHandler} />
                    {filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            id={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
                </>
            </Card>
        </>
    );
};

export default Expenses;
