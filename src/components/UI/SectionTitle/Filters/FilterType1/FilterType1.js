import Input from "../../../Input/Input";

import classes from './FilterType1.module.css'

const FilterType1 = (props) => {
    return (
        <div className={classes.FilterType1}>
            <div>
                <Input
                    elementType={props.firstInputType}
                    options={props.firstInputOptions}
                    label={props.firstInputLabel}
                />
            </div>
            <div>
                <Input
                    elementType={props.secondInputType}
                    options={props.secondInputOptions}
                    label={props.secondInputLabel}
                />
            </div>
            <div>
                <Input
                    elementType={props.thirdInputType}
                    options={props.thirdInputOptions}
                    label={props.thirdInputLabel}
                />
            </div>
            <div>
                <Input
                    elementType={props.lastInputType}
                    elementConfig={{type: 'number', placeholder: '0'}}
                    label={props.lastInputLabel}
                />
            </div>
        </div>
    )
}

export default FilterType1;