import React from "react";
import styled from "styled-components";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

const ContactBox = styled.div`
  background: rgba(144, 19, 254, 0.21);
  border-radius: 37.3588px;
  margin: 300px 8% 100px 8%;
  padding: 60px 18%;
`;
const StyledHeading = styled.div`
  font-weight: 600;
  font-size: 54px;
  line-height: 74px;
  text-align: center;
  color: #ffffff;
`;
const StyledSubtext = styled.div`
  color: #d8b6ff;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;

export default ({ language }) => {
  return (
    <ContactBox>
      <StyledHeading>
        <FormattedMessage id="home.contact.heading" />
      </StyledHeading>
      <StyledSubtext>
        <FormattedMessage
          id="home.contact.subtext"
          values={{
            telegram: children => (
              <a
                href="https://t.me/kleros"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            email: children => (
              <a
                href="mailto:contact@kleros.io"
                title="contact@kleros.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )
          }}
        />
      </StyledSubtext>
    </ContactBox>
  );
};
