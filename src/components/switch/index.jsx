import React from 'react';
import PropTypes from 'prop-types';

import { CustomSwitch } from './styles';

export const Switch = (props) => {

    // const options = [
    //     { label: "All", value: "all" },
    //     { label: "My Cryptocurrencies", value: "cryptocurrencies" }
    // ]

    return (
        <CustomSwitch
            options={props.options}
            initial={0}
            onPress={value => props.onChanged(value)}
        />
    )
}


Switch.propTypes = {
    options: PropTypes.array,
    onChanged: PropTypes.func
}