import PropTypes, { string } from "prop-types";
import styles from "./Card.module.css";

const Card = (props) => {
    const classes = `${styles.card} ${props.className}`;
    return <div className={classes}>{props.children}</div>;
};

Card.propTypes = {
    children: PropTypes.element.isRequired,
    className: string,
};

export default Card;
