import CryptoJS from "crypto-js";
import { NextApiRequest } from "next";

export function paginateText(
  s: string,
  x: number,
  includePeriods: boolean = true
): string {
  let r = s;

  if (s.length < x) r = `${s.slice(0, x)} ${includePeriods ? "..." : ""}`;

  return r;
}

/*
export function encodeBase64(s: string): string {
  const words = CryptoJS.enc.Utf8.parse(s);
  const base64 = CryptoJS.enc.Base64.stringify(words);
  return base64;
}

export function decodeBase64(s: string): string {
  const words = CryptoJS.enc.Base64.parse(s);
  const textString = CryptoJS.enc.Utf8.stringify(words);
  return textString;
}

export function getHash(s: string): string {
  const hash = CryptoJS.SHA256(s).toString(CryptoJS.enc.Hex);
  return hash;
}

export function isAuthorized(req: NextApiRequest): boolean {
  // NOTE -- By default, HTTP Basic Auth provides password in base64
  //         username:password
  const providedPassword: string = req.headers.authorization.split(" ")[1];
  const providedAuthKey = getHash(providedPassword);
  const envAdminKeyHash = getHash(encodeBase64(process.env.ADMIN_KEY));
  
  return providedAuthKey === envAdminKeyHash;
}
*/
