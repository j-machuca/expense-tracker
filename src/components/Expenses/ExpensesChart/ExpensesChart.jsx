import PropTypes from "prop-types";
import Chart from "../../Chart/Chart";

const ExpensesChart = (props) => {
    const dataPointValues = props.expenses.map((dataPoint) => dataPoint.amount);

    const maxVal = Math.max(...dataPointValues);

    const chartDataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} maxValue={maxVal} />;
};

ExpensesChart.propTypes = {
    expenses: PropTypes.arrayOf(Object),
};

export default ExpensesChart;
