import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    box: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: 'darkgray',
    },
    inner: {
        flex: 1,
        margin: 2,
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
})

export default class Checkbox extends Component {

    render() {
        const {onToggle, isChecked} = this.props

        return (
            <TouchableOpacity onPress={onToggle}>
                <View style={styles.box}>
                    { isChecked && <View style={styles.inner}/> }
                </View>
            </TouchableOpacity>
        )
    }
}
Checkbox.propTypes = {
    onToggle: PropTypes.func,
    isChecked: PropTypes.bool,
}