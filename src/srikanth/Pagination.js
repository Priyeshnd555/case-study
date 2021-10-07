import { Container, Grid, Paper, TablePagination } from '@material-ui/core'
import { Home} from '@material-ui/icons'
import { Pagination, Stack } from '@mui/material'
import React from 'react'

function PageNavigation() {
    return (
        <div>
             <Paper> 
                 <Container>
                <Grid container>
                    <Grid item>
                       <Home></Home>
                    </Grid>
                    <Grid item>
                       <Stack spacing={2}>
                         <Pagination count={3} />
                         </Stack>
                     </Grid>
                 
      
   
                        </Grid>
                    
        </Container>
           
            </Paper>
        </div>
    )
}

export default PageNavigation

