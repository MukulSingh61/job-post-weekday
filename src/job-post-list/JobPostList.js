/*import { useEffect } from 'react';*/
import Grid from '@mui/material/Grid';
import JobCard from './../job-card-component/JobCard';

const JobPostList = () => {

    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <   Grid item xs={4} sm={4} key={1}>
                    <JobCard />
                </Grid>
                
            </Grid>
        </div>
      );
};

export default JobPostList;