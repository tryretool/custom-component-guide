import React from 'react';

const DEFAULT_URL = 'https://github.com/bryan-at-retool/react-custom-components';
const DEFAULT_TEXT = 'Jump to repository'


const HorizontalStepper = ({ triggerQuery, model, modelUpdate }) => {
  if (!(typeof model.url === 'string' && model.url.length) ) { model['url'] = DEFAULT_URL; }
  if (!(typeof model.text === 'string' && model.text.length) ) { model['text'] = DEFAULT_TEXT; }

  // assumes you have font awesome CDN added
  return (
    <div height="100%">
    <a className="texttoshow" target="_blank" href={model.url}>
      <p>{model.text}</p>
      <i className="fas fa-external-link-alt"></i>
    </a>
    </div>
  );
}

export default Retool.connectReactComponent(HorizontalStepper);