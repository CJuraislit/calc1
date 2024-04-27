import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function ClickCalc() {
  function CountButton(props) {
    const expressions = /\+|\-|\/|\*| /;
    const lastNumber = props.data[props.data.length - 1];

    function checkExpressionType() {
      if (expressions.test(lastNumber)) return;
      props.onClick(props.data + props.expression);
    }

    return (
      <Button
        onClick={() => {
          checkExpressionType();
        }}
      >
        {props.expression}
      </Button>
    );
  }

  function Numbers(props) {
    const nums = Array.from(Array(10).keys()).map((number) => {
      return (
        <Button
          onClick={(e) => {
            if (props.data != "0") props.onClick(props.data + e.target.innerHTML);
            else props.onClick(e.target.innerHTML);
          }}
          key={number}
          w="40px"
          h="40px"
          margin="4px"
        >
          {number}
        </Button>
      );
    });
    console.log(nums);
    return (
      <Box display="flex" flexWrap="wrap" w="150px">
        {nums}
      </Box>
    );
  }
}
