import React from 'react';
import MathJax from 'react-mathjax'

import { Box, Button, Divider, TextField, Typography } from '@mui/material'

/* Default component model
  {
    "greeting": "Hello, ",  
    "username": {{ current_user.fullName }},
    "message": "Welcome to custom components!",
    "yesQuery": "yesQuery",
    "noQuery": "noQuery",
    "runQuery": "runQuery"
  }
*/

const tex = {
  quadratic_solution: 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}',
  tex_example: `f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi)\\,e^{2 \\pi i \\xi x} \\,d\\xi`,
}

const ExampleComponent = ({ triggerQuery, model, modelUpdate }) => {
  const handleChange = (e) => {
    modelUpdate({
      greeting: e.target.value
    })
  }
  return(
    <>
      <Box sx={{ m: 1 }} id="retool-custom-mathjax-container">
        <Typography variant="body1">{model.text}</Typography>
          <MathJax.Provider>
          <MathJax.Node formula={model.equation} id="retool-custom-mathjax-equation"/>
        </MathJax.Provider>
        <Typography variant="body1">{model.question}</Typography>
      </Box>
    </>
  );
}
export default ExampleComponent;