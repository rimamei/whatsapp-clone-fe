import Cookies, { CookieAttributes } from 'js-cookie';
import jwtDecode from 'jwt-decode';

export type CookieOptionType = CookieAttributes;
export const cookiesPrefix = '__app__';

export type CookiesKeyProps = 'acs_tkn';

export const setCookie = (
  keyName: CookiesKeyProps,
  value: string,
  options: CookieAttributes | undefined = undefined
) => {
  let data: string = btoa(value);
  Cookies.set(`${cookiesPrefix}${keyName}`, data, options);
};

export const getCookie = (keyName: CookiesKeyProps) => {
  const value = Cookies.get(`${cookiesPrefix}${keyName}`);
  const jwtToken: string = atob(value!)
  const payload = jwtDecode(jwtToken)
  return payload;
};

export const removeCookie = (keyName: CookiesKeyProps) => {
  return Cookies.remove(`${cookiesPrefix}${keyName}`);
};
