// import React from 'react';
import PropTypes from "prop-types";

export default function Table({data, random}) {
    return (
        {data,random }
    )
}
Table.propTypes = {
    random: PropTypes.bool,
    data: PropTypes.array,
};