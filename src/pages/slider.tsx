import React from "react";
import PageHead from "../components/head/PageHead";
import SliderApp from "../components/slider/SliderApp";

const SliderPage = (): JSX.Element => (
	<>
		<PageHead
      stylesheets={[
        "https://fonts.googleapis.com/css2?family=Encode+Sans&family=Xanh+Mono&display=swap"
      ]}
    />
    <SliderApp />
	</>
);

export default SliderPage;
