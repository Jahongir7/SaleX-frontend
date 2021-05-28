import Input from "../../../Input/Input";

import classes from './Clothes.module.css';

const Clothes = (props) => {
    return (
        <div className={classes.Clothes}>
            <div>
                <Input
                    elementType='select'
                    options={props.firstInputOptions}
                    label='Mahsulot turi'
                />
            </div>
            <div>
                <Input
                    elementType='select'
                    options={props.secondInputOptions}
                    label='Holati'
                />
            </div>
            <div>
                <Input
                    elementType='input'
                    elementConfig={{type: 'number', placeholder: '0'}}
                    label='Narxi'
                />
            </div>
        </div>
    )
}

export default Clothes;