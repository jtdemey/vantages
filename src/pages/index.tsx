import React from "react";
import VantagesApp from "../components/vantages/VantagesApp";
import PageHead from "../components/head/PageHead";

const VantagesPage = (): JSX.Element => (
  <>
    <PageHead
      stylesheets={[
        "https://fonts.googleapis.com/css2?family=Encode+Sans&family=Xanh+Mono&display=swap"
      ]}
    />
    <VantagesApp />
  </>
);

export default VantagesPage;
