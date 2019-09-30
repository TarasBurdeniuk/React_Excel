import React, {useState} from 'react';
import Input from './Input';
import {connect} from 'react-redux';
import {changeInput} from "../actions/input";
import {concat, sum} from "../function/excelFunction";
import {checkInput} from "../function/validate";

const Table = ({changeInput, input}) => {
    const [data, setData] = useState('');
    const inputItem = [];

    const handleChange = e => {
        setData({data: e.target.value});
        changeInput(e.target.name, e.target.value);
    };

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            const key = checkInput(e.target.value);
            if (key.length && key[0] === 'sum') {
                sum(key[1], input);
            }
        }
    };

    const abc = [];
    for (let j = 97; j < 106; j++) {
        abc.push(String.fromCodePoint(j));
    }

    for (let i = 0; i < 10; i++) {
        inputItem.push(
            <tr key={i}>
                <th>{i === 0 ? 'n/a' : i}</th>
                {abc.map((item) => (<th key={`${item}${i}`}>{i === 0 ? item : (
                    <Input
                        name={`${item}${i}`}
                        handleChange={(e) => handleChange(e)}
                        handleKeyPress={(e) => handleKeyPress(e)}
                    />
                )}</th>))}
            </tr>
        )
    }

    return (
        <table>
            <tbody>{inputItem}</tbody>
        </table>
    )
};

const mapStateToProps = state => ({
   input: state.input,
});


const mapDispatchToProps = {
    changeInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);