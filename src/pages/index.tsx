import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";

function Page() {
  return null;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export async function getServerSideProps({ locale = "" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default Page;
