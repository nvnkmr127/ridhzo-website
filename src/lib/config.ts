export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.ridhzo.com";

export function appUrl(path: string) {
  return `${APP_URL.replace(/\/$/, "")}${path}`;
}
