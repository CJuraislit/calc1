import { useState } from "react";
import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";

export default function InputCalc(props) {
  const [result, setResult] = useState("");

  function updataCounts(e) {
    const expressions = /\+|\-|\/|\*|=[A-z]| /;
    const lastNumber = e.target.value[e.target.value.length - 1];

    if (expressions.test(lastNumber)) return;
    else setResult(eval(e.target.value));
  }

  return (
    <Flex w="100%" justifyContent="center">
      <Flex justifyContent="center" alignItems="center" border="2px" borderRadius="8px" borderColor="gray.50">
        <Input
          type="text"
          border="transparent"
          onChange={(e) => {
            updataCounts(e);
          }}
        />
        <Text textColor="tomato" px="4px">
          {result}
        </Text>
      </Flex>
    </Flex>
  );
}
