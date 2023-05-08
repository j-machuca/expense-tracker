import PropTypes from "prop-types";
import ChartBar from "./ChartBar/ChartBar";
import styles from "./Chart.module.css";

const Chart = (props) => {
    return (
        <div className={styles.chart}>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={props.maxValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

Chart.propTypes = {
    dataPoints: PropTypes.arrayOf(Object),
    maxValue: PropTypes.number,
};

export default Chart;
