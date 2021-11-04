import React from 'react';

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

const ExampleComponent = ({ triggerQuery, model, modelUpdate }) => {
  const handleChange = (e) => {
    modelUpdate({
      greeting: e.target.value
    })
  }
  return(
    <>
          <Box sx={{ m: 1 }}>
            <Typography variant='h2'>{model.greeting}{model.username}</Typography>
            <Typography variant='h4'>{model.message}</Typography>
            <Button variant="outlined"
              onClick={()=>triggerQuery(model.runQuery)}
            >Get a user name</Button>
          </Box>

          <Box sx={{ m: 1 }}>
            <Typography variant='body1'>Want to trigger a query?</Typography>
            <Button variant="outlined"
              onClick={()=>triggerQuery(model.yesQuery)}
            >
              👍
            </Button>
            <Button variant="outlined"
              onClick={()=>triggerQuery(model.noQuery)}
            >
              👎
            </Button>
          </Box>

          <Divider />

          <Box sx={{ m: 1 }}>
            <TextField id="outlined-uncontrolled" label="Change Greeting" onChange={handleChange} />
          </Box>
          
      </>
  );
}
export default ExampleComponent;