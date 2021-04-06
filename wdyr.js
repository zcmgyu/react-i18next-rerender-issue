/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React from 'react';

export default function onClientEntry() {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    exclude: [
      /^Body/,
      /^undefined/,
      /^Checkbox/,
      /^Radio/,
      /^Table/,
      /^Cell/,
      /^Handle/,
      /^BaseHandle/,
      /^EdgeWrapper/,
      /^EdgeRenderer/,
      /^NodeWrapper/,
      /^FlowRenderer/,
      /^Controls/,
      /^MiniMap/,
      /^GraphView/,
      /^Unknown/,
    ],
  });
}
