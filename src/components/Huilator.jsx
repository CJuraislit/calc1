import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";
import ClickCalc from "./ClickCalc";
import InputCalc from "./InputCalc";

export default function Huilator() {
  const [calcType, setCalcType] = useState("ClickCalc");
  let calculator;
  switch (calcType) {
    case "ClickCalc":
      calculator = <ClickCalc />;
      break;
    case "InputCalc":
      calculator = <InputCalc />;
      break;
    default:
      calculator = <ClickCalc />;
  }
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" m="10px">
      <Button
        onClick={() => {
          calcType == "ClickCalc" ? setCalcType("InputCalc") : setCalcType("ClickCalc");
        }}
      >
        Change CalcType
      </Button>
      <Box m="10px">{calculator}</Box>
    </Box>
  );
}
