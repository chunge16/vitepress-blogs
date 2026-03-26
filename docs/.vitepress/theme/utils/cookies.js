const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

function readCookie(name) {
  const cookiePrefix = `${encodeURIComponent(name)}=`;
  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith(cookiePrefix));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.slice(cookiePrefix.length));
}

export function syncLanguageCookie(language) {
  if (!language) {
    return;
  }

  if (readCookie('nf_lang') === language) {
    return;
  }

  document.cookie = [
    `nf_lang=${encodeURIComponent(language)}`,
    `max-age=${ONE_YEAR_IN_SECONDS}`,
    'path=/',
    'SameSite=Lax',
  ].join('; ');
}
