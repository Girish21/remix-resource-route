import type { ActionFunction, LoaderFunction, MetaFunction } from "remix";
import { Form, redirect, useLoaderData } from "remix";
import Preview from "~/components/preview-radio";
import type { Theme } from "~/theme";
import { DarkTheme, LightTheme, PopTheme } from "~/theme";
import { commitSession, getSession } from "~/theme.server";

type LoaderData = {
  theme: string;
  themes: {
    DarkTheme: Theme;
    LightTheme: Theme;
    PopTheme: Theme;
  };
};

export const meta: MetaFunction = () => {
  return {
    title: "Remix Resource Route Theme",
  };
};

export const action: ActionFunction = async ({ request }) => {
  const [session, formData] = await Promise.all([
    getSession(request.headers.get("Cookie")),
    request.formData(),
  ]);
  const theme = formData.get("theme");

  session.set("theme", theme);

  return redirect("/", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme");

  return { theme, themes: { DarkTheme, LightTheme, PopTheme } };
};

export default function App() {
  const data = useLoaderData<LoaderData>();

  return (
    <main className="h-full grid place-content-center">
      <section className="p-8 bg-foreground rounded-xl shadow-md">
        <Form reloadDocument method="post">
          <div className="flex gap-6">
            {Object.entries(data.themes).map(([name, theme]) => (
              <div key={name} className="flex flex-col w-36">
                <Preview
                  name="theme"
                  label={name}
                  theme={theme}
                  defaultChecked={data.theme === name}
                  value={name}
                />
              </div>
            ))}
          </div>
          <button className="px-3 py-2 text-lg bg-primary font-bold rounded-lg block mt-6 mx-auto shadow-md transform-gpu hover:scale-105 active:scale-90 transition-transform">
            Submit
          </button>
        </Form>
      </section>
    </main>
  );
}
