import React from "react";
import Template from "../components/layout";
import { Location } from '@reach/router';
import Landing from '../components/landing'

export default () => (
  <Template>
    <Location>
      {({navigate, location}) => (
        <Landing location={location} />
      )}
    </Location>
  </Template>
)
