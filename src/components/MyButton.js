import PropTypes from "prop-types";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MyButton = ({title = "default", ...props }) => {
    
    console.log(props);

    // MyButton.defaultProps = {
    //     title: 'Default Button',
    // };

    MyButton.propTypes = {
        title: PropTypes.string,
    };

    return (
        <TouchableOpacity
            style={{ 
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => alert('Click !!!')} 
        >
            
            <Text style={{ color: 'white', fontSize:24}}>
                {props.children || props.title}
            </Text>

        </TouchableOpacity>
    );
};

export default MyButton;