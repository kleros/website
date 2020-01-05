import React from "react";
import Template from "../components/layout";
import { Location } from "@reach/router";
import Landing from "../components/landing";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

export default injectIntl(() => (
  <Template>
    <Location>
      {({ navigate, location }) => <Landing location={location} />}
    </Location>
  </Template>
));
