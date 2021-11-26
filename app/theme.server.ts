import { createCookieSessionStorage } from "remix";

if (!process.env.COOKIE_SECRET)
  throw new Error(`process.env.COOKIE_SECRET is required`);

const { commitSession, destroySession, getSession } =
  createCookieSessionStorage({
    cookie: {
      name: "__theme",
      path: "/",
      sameSite: "lax",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      secrets: [process.env.COOKIE_SECRET!],
    },
  });

export { commitSession, destroySession, getSession };
