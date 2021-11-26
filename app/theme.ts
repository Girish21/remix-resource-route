type Theme = {
  background: string;
  foreground: string;
  text: string;
  primary: string;
  secondary: string;
};

const LightTheme: Theme = {
  background: "#ff99c8",
  foreground: "#d0f4de",
  primary: "#a9def9",
  secondary: "#f9844a",
  text: "#000",
};

const DarkTheme: Theme = {
  background: "#073b4c",
  foreground: "#495057",
  primary: "#343a40",
  secondary: "#9d4edd",
  text: "#fff",
};

const PopTheme: Theme = {
  background: "#9b5de5",
  foreground: "#f15bb5",
  primary: "#3a86ff",
  secondary: "#00f5d4",
  text: "#fff",
};

export type { Theme };
export { DarkTheme, LightTheme, PopTheme };
