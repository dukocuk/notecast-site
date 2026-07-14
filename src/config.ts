/**
 * Central place for every external link and contact detail.
 * Update these in one spot when the extension is published / the repo moves.
 */

// The Chrome Web Store listing may not exist yet — swap this in when published.
export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/inmabjpgpdocdedjbdiiphkjgjanmech?utm_source=item-share-cb';

// The privacy policy is a dedicated page served by the site itself.
// BASE_URL already includes the trailing slash (e.g. "/notecast-site/").
export const PRIVACY_URL = `${import.meta.env.BASE_URL}privacy.html`;

export const CONTACT_EMAIL = 'duran.kse@gmail.com';

// Keyboard shortcut shown throughout the site.
export const SHORTCUT = 'Ctrl/Cmd + Shift + E';
