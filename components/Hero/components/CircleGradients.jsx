import { Circle } from "@chakra-ui/react";

const CircleGradients = () => {
  return (
    <>
      <Circle
        pos={"absolute"}
        size={["20rem", "25rem", "25rem", "30rem"]}
        left={"50%"}
        top={"-10%"}
        transform={"translate(-50%, -50%)"}
        bg="radial-gradient(circle, #3A9190 30%, #00C95D55 47%, #00C95D22 57%, #00C95D11 62%, transparent 71%)"
        sx={{
          backdropFilter: [null, null, null, "blur(2px) "],
        }}
        zIndex={"1"}
      />
      <Circle
        pos={"absolute"}
        size={["20rem", "25rem", "25rem", "30rem"]}
        left={"50%"}
        bottom={"-10%"}
        transform={"translate(-50%, 50%)"}
        bg="radial-gradient(circle, #3A9190 30%, #3A91A055 47%, #3A91A022 57%, #3A91A011 62%, transparent 71%)"
        sx={{
          backdropFilter: [null, null, null, "blur(2px) "],
        }}
      />
    </>
  );
};

export default CircleGradients;
