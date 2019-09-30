import React from 'react';
import {connect} from 'react-redux';

const HeadInput = ({input, currentInputName}) => {
    return (
        <input
            className='main-input'
            value={input[currentInputName]}
            placeholder={currentInputName}
            disabled={true}
        />
    )
};

const mapStateToProps = state => ({
    input: state.input,
    currentInputName: state.input.currentInputName,
});

export default connect(mapStateToProps)(HeadInput);