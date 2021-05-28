import classes from './Button.module.css'

const Button = (props) => (
    // btnType = Main bo`lsa asosiy orange rangli button

    <button
        disabled={props.disabled}
        onClick={props.clicked}
        className={[classes.Button, classes[props.btnType]].join(' ')}
    >
        {props.children}
    </button>
);

export default Button