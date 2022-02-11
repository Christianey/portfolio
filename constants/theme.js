import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#00C95D",
  secondary: "#3A91A0",
  darkBlue: "#0E0E1C",
};

// const fonts = {
//   heading: "Nexa, sans-serif",
//   body: "Nexa, sans-serif",
// };

// const Button = {
//   baseStyle: {
//     background: "primary",
//     color: "white",
//   },
//   sizes: {
//     sm: {
//       fontSize: "sm",
//       px: 4,
//       py: 3,
//     },
//     md: {
//       fontSize: "md",
//       px: 4,
//       py: 2,
//     },
//   },
//   // Two variants: outline and solid
//   variants: {
//     solid: {
//       bg: "primary",
//       color: "white",
//       _hover: {
//         bg: "primary",
//       },
//       _focus: {
//         boxShadow: "none",
//       },
//       _active: {
//         bg: "none",
//       },
//       _disabled: {
//         opacity: 1,
//       },
//     },
//   },
//   // The default size and variant values
//   defaultProps: {
//     size: "md",
//     variant: "solid",
//   },
// };

const theme = extendTheme({ colors });

export default theme;
