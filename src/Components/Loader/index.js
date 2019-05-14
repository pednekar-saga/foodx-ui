import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const GlobalLoader = () => (
   <Dimmer active inverted>
      <Loader size="massive">Loading</Loader>
   </Dimmer>
);
export default GlobalLoader;
