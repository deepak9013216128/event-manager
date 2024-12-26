"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { Inter, Playfair_Display, Protest_Riot } from "next/font/google";
import NextLink from "next/link";
import { forwardRef } from "react";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});
export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const play = Playfair_Display({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const protest = Protest_Riot({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,

    h1: {
      fontFamily: protest.style.fontFamily,
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    body1: {},
    body2: {},
  },
  palette: {
    primary: {
      main: "#0B455E",
    },
    secondary: {
      main: "#36519B",
    },
    grey: {
      //   100: preBackgroundColor,
      //   200: bodyTextColor2,
      //   300: hrBackgroundColor,
      //   400: tableBorderColor,
      //   500: bodyTextColor1,
      //   600: headerDarkColor,
    },
    text: {
      primary: "#fff",
      secondary: "rgba(53, 53, 53, 1)",
    },
  },

  components: {
    // MuiTable: {
    //   styleOverrides: {
    //     root: {
    //       borderColor: tableBorderColor,
    //     },
    //   },
    // },
    // MuiTableCell: {
    //   styleOverrides: {
    //     root: {
    //       borderColor: tableBorderColor,
    //     },
    //   },
    // },
    // MuiDivider: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: hrBackgroundColor,
    //     },
    //   },
    // },
    // MuiChip: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({}),
    //   },
    // },
    // MuiButton: {
    //   styleOverrides: {
    //     root: ({ ownerState, theme }) => ({
    //       fontFamily: roboto.style.fontFamily,
    //       fontSize: 13,
    //       lineHeight: 2.3,
    //       textTransform: "uppercase",
    //       fontWeight: 400,
    //       backgroundColor: "transparent",
    //       border: `1px solid ${mainColor}`,
    //       borderRadius: 0,
    //       outline: "none",
    //       padding: "0.5rem 3rem",
    //       ":hover": {
    //         color: "#fff",
    //         backgroundColor: mainColor,
    //       },
    //     }),
    //   },
    // },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.sx.fontFamily === "play" && {
            fontFamily: play.style.fontFamily + "!important",
          }),
          ...(ownerState.sx.fontFamily === "inter" && {
            fontFamily: inter.style.fontFamily + "!important",
          }),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: theme.palette.text.secondary,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(5, 5, 5, 0.23) !important",
          },
          ...(ownerState.disabled && {}),
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: theme.palette.text.secondary,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(5, 5, 5, 0.23) !important",
          },
          ...(ownerState.disabled && {}),
        }),
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       background: "transparent",
    //       border: "none",
    //       opacity: 1,
    //     },
    //   },
    // },
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: inter.style.fontFamily,
          textDecoration: "none",
          // color: "#fff",
        }),
      },
    },
    // MuiSelect: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       fontFamily: roboto.style.fontFamily,
    //       fontSize: 16,
    //       lineHeight: 1.7,
    //       color: bodyTextColor1,
    //       backgroundColor: "transparent",
    //       borderBottom: `1px solid ${tableBorderColor}`,
    //       border: 0,
    //       outline: "none",
    //       cursor: "pointer",
    //       minWidth: 220,
    //       ":disabled": {
    //         borderColor: mainColor,
    //         backgroundColor: preBackgroundColor,
    //       },
    //     }),
    //   },
    // },
  },
});
theme = responsiveFontSizes(theme);
export { theme };
