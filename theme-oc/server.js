import React from 'react';
import {renderToString} from 'react-dom/server';
import PartyTheme from "./src/components/PartyTheme";
const winter = require('./src/components/content/Winter.json');
const summer = require('./src/components/content/Summer.json'); 

export const data = (context, callback) => {
  const {theme} = context.params;
  const {staticPath} = context;

  const content = {};
  if (theme == "winter"){
    content.party = winter;
  }
  else{
    content.party = summer;
  }

  const renderedApp = renderToString(<PartyTheme data={content.party} />);

  callback(null, {
    staticPath,
    data: JSON.stringify(content),
    app: renderedApp
  });
};
