import React from "react";

// Temporary redirection while translations are missing.

if (typeof window !== `undefined` && window.location.pathname.match(/\/en\/\w+\/*/)) window.location.replace(window.location.pathname.match(/\/en(\/\w+)\/*/)[1]); // highlight-line
else if (typeof window !== `undefined` && window.location.pathname.match(/\/\w{2}\/?$/)) window.location.replace("/"); // highlight-line
else if (typeof window !== `undefined` && window.location.pathname.match(/\/\w{2}($|\/\w+\/*)/)) window.location.replace(window.location.pathname.match(/\/\w{2}($|\/\w+\/*)/)[1]); // highlight-line

const MissingLocaleRedirect = () => <></>;

export default MissingLocaleRedirect;
