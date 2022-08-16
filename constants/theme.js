export const COLORS = {
  peach: "#F9AC72",
  yellow: "#FEC211",
  red: "#E90C0C",
  peach_text: "#F28838",
  gray: "#DCDBDB",
  gray_2: "#EDECEC",
  gray_3: "#cfd1cf",
  white: "#FFFFFF",

  black_heading: "#18120C",
  black_text: "#2F2925",
  black_text_2: "#56514E",
  gray_text: "#7D7F80",
  gray_text_2: "#999B9C",
  gray_text_3: "#93908E",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  moreLarge: 20,
  extraLarge: 24,
  mega: 28,
  ultra: 32,
  max: 36,
  promax: 40,
  megamax: 48,
};

export const FONTS = {
  //   bold: "InterBold",
  //   semiBold: "InterSemiBold",
  //   medium: "InterMedium",
  //   regular: "InterRegular",
  //   light: "InterLight",
  mont400: "Montserrat_400Regular",
  mont500: "Montserrat_500Medium",
  mont600: "Montserrat_600SemiBold",
  mont700: "Montserrat_700Bold",
  mul400: "Mulish_400Regular",
  mul500: "Mulish_500Medium",
  mul600: "Mulish_600SemiBold",
  mul700: "Mulish_700Bold",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
