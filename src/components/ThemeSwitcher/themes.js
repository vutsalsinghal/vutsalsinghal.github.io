const themes = [
  {
    name: "blue",
    colorPrimary: "#4ea9da",
    colorAlternate: "#FAFAFA",
    colorHighlight: "#daedf7",
    textPrimary: "#202121",
    navAlpha: "rgba(250, 250, 250, 0.75)"
  },
  {
    name: "blue-alt",
    colorPrimary: "#FAFAFA",
    colorAlternate: "#0277BD",
    colorHighlight: "#6caed8",
    textPrimary: "#FAFAFA",
    navAlpha: "rgba(70, 70, 100, 0.75)"
  },
  {
    name: "cyan",
    colorPrimary: "#3dc0b0",
    colorAlternate: "#FAFAFA",
    colorHighlight: "#d7f2ef",
    textPrimary: "#202121",
    navAlpha: "rgba(250, 250, 250, 0.75)"
  },
  /*{
    name: 'cyan-alt',
    colorPrimary: '#FAFAFA',
    colorAlternate: '#3dc0b0',
    colorHighlight: '#35a698',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(61, 192, 176, 0.75)'
  },*/
  {
    name: "green",
    firstTime: true,
    colorPrimary: "#5BA150",
    colorAlternate: "#FAFAFA",
    colorHighlight: "#e1efdf",
    textPrimary: "#202121",
    navAlpha: "rgba(250, 250, 250, 0.75)"
  },
  {
    name: "yellow-green",
    colorPrimary: "#197700",
    colorAlternate: "#FFEB3B",
    colorHighlight: "#fffd87",
    textPrimary: "#202121",
    navAlpha: "rgba(250, 250, 250, 0.75)"
  },
  {
    name: "yellow-blue",
    colorPrimary: "#0777BD",
    colorAlternate: "#FFEB3B",
    colorHighlight: "#a0dbff",
    textPrimary: "#0777BD",
    navAlpha: "rgba(250, 250, 250, 0.75)"
  },
  {
    name: "red",
    firstTime: true,
    colorPrimary: "#af3d4e",
    colorAlternate: "#FAFAFA",
    colorHighlight: "#f6e4e7",
    textPrimary: "#202121",
    navAlpha: "rgba(250, 250, 250, 0.75)"
  },
  {
    name: "red-alt",
    colorPrimary: "#FFFFFF",
    colorAlternate: "#89303d",
    colorHighlight: "#63232c",
    textPrimary: "#FFFFFF",
    navAlpha: "rgba(137, 48, 61, 0.75)"
  },
  {
    name: "indigo",
    colorPrimary: "#303F9F",
    colorAlternate: "#E8EAF6",
    colorHighlight: "#99a5ef",
    textPrimary: "#303F9F",
    navAlpha: "rgba(48, 63, 159, 0.75)"
  },
  {
    name: "indigo-alt",
    colorPrimary: "#FAFAFA",
    colorAlternate: "#303F9F",
    colorHighlight: "#242f78",
    textPrimary: "#FAFAFA",
    navAlpha: "rgba(48, 63, 159, 0.75)"
  },
  {
    name: "material-cyan",
    firstTime: true,
    colorPrimary: "#00BCD4",
    colorAlternate: "#FFFFFF",
    colorHighlight: "#d4faff",
    textPrimary: "#212121",
    navAlpha: "rgba(255, 255, 255, 0.75)"
  }
];

export const getThemes = () => {
  return themes.map(theme => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};
