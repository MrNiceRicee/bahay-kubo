import { atom } from "nanostores";

/**
 * @typedef {'light' | 'dark' | 'system' | string & {}} Theme
 */

/**
 *
 * @returns {Theme}
 */
const getSystemTheme = () => {
  if (localStorage && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return "system";
};

export const themeState = atom(getSystemTheme());
