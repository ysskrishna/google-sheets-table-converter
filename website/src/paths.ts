/** Base URL path with exactly one trailing slash (e.g. `/google-sheets-table-converter/`). */
export const siteBasePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
