import React from 'react';
const ExampleComponent = ({ triggerQuery, model, modelUpdate }) => {
  const handleChange = (e) => {
    modelUpdate({
      headerText: e.target.value
    })
  }
  return(
    <div style={{width: '100vw', height: '100vh'}}>
      <div>
        <h4>{model.headerText ?? ''}</h4>
        <p>Want to run a query?</p>
        <button
          onClick={()=>triggerQuery(model.yesQuery)}
        >
          👍
        </button>
        <button
          onClick={()=>triggerQuery(model.noQuery)}
        >
          👎
        </button>
      </div>
      <div>
        <button
          onClick={()=>triggerQuery(model.runQuery)}
        >Get a random user</button>
      </div>
      <div>
        <p>Hello Dave Leo?</p>
        <input onChange={handleChange} />
      </div>
      <h2>
        {model.displayText}
      </h2>
    </div>
  );
}
export default ExampleComponent;