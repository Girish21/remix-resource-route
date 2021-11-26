import type { LoaderFunction } from "remix";
import type { Theme } from "~/theme";
import { LightTheme, DarkTheme, PopTheme } from "~/theme";
import { getSession } from "~/theme.server";

const themes: Record<string, Theme> = {
  LightTheme,
  DarkTheme,
  PopTheme,
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const theme = (session.get("theme") as string) ?? "LightTheme";

  let css = "";

  const properties = Object.entries(themes[theme]).map(
    ([key, color]) => `--${key}:${color}`
  );

  css = `:root{${properties.join(";")}}`;

  return new Response(css, { headers: { "Content-Type": "text/css" } });
};
