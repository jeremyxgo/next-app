const namespaces = ["app"];
const locales = ["en-US"];

module.exports = {
  ns: namespaces,
  defaultNS: namespaces[0],
  reloadOnPrerender: process.env.NODE_ENV !== "production",
  i18n: {
    locales: locales,
    defaultLocale: locales[0],
  },
};
