import React from "react";
import PageHead from "../components/head/PageHead";
import NeonApp from "../components/neon/NeonApp";

const NeonPage = (): JSX.Element => (
  <>
    <PageHead
      stylesheets={[
        "https://fonts.googleapis.com/css2?family=Monoton&display=swap"
      ]}
    />
    <NeonApp />
  </>
);

export default NeonPage;
