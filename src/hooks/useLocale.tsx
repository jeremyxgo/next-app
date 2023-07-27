import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function useLocale() {
  const [t] = useTranslation();
  const router = useRouter();
  const { asPath, locale, locales, pathname, query } = router;

  function changeLocale(nextLocale: string) {
    window.document.cookie = `NEXT_LOCALE=${nextLocale}`;
    router.push(
      {
        pathname,
        query,
      },
      asPath,
      {
        locale: nextLocale,
      },
    );
  }

  return {
    locale,
    locales,
    changeLocale,
    t,
  };
}
