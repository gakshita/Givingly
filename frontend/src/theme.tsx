const darktheme = {
    primary: "#c762f4",
    secondary: "#f3f3f3",
    border: "#e0e0e0",
    text: "#fff",
    background_1: "#13151b",
    background_2: "#171821",
    background_3: "#21222d",
    background_4: "#2a2c3c",
    background_5: "#21222d",
    background_6: "#242632",
    indicator: "#FFCC00",
    text_1: "#fff",
    text_2: "#7f8083",
    text_3: "#5469dd",
    text_4: "#8F8F92",
    green: "#3DB35C"
};

const lightTheme = {
    primary: "#92E3A9",
    secondary: "#fff",
    ternary: "#000",
    color1: "#e9e9e9",
    color2: "#92e3a952",
    border: "#878787",
    text: "#000",
    // background: "#92E3A9",
    indicator: "#ccc"
};

const defaultTheme = {
    fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        xxl: "22px",
        xxxl: "24px",
        heading: "90px",
        mheading: "40px"
    },
    borderRadius: {
        small: "5px",
        medium: "10px",
        large: "15px",
        circle: "50%"
    },
    fontFamily: "Poppins"
};

const theme = {
    dark: {
        color: darktheme,
        ...defaultTheme
    },
    light: {
        color: lightTheme,
        ...defaultTheme
    }
};

export default theme;
