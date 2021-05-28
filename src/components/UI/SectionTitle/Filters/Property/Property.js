import Input from "../../../Input/Input";

import classes from './Property.module.css'

const Property = (props) => {
    return (
        <div className={classes.Property}>
            <div>
                <Input
                    elementType='select'
                    options={props.firstInputOptions}
                    label='Rusmni tanlang'
                />
            </div>
            <div>
                <Input
                    elementType='select'
                    options={props.secondInputOptions}
                    label='Xonalar soni'
                />
            </div>
            <div>
                <Input
                    elementType='select'
                    options={props.firstInputOptions}
                    label='Umumiy maydon'
                />
            </div>
            <div>
                <Input
                    elementType='select'
                    options={props.secondInputOptions}
                    label='Qavati'
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

export default Property;