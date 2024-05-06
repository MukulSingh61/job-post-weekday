import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import JobCard from './../job-card-component/JobCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions/index';

const JobPostList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      dispatch(fetchData());
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {items.map((item) => (
                <Grid item xs={4} sm={4} key={item.jdUid}>
                  <JobCard companyName={item.companyName} 
                            jobDetailsFromCompany={item.jobDetailsFromCompany} 
                            location={item.location}
                            jobRole={item.jobRole}
                            logoUrl={item.logoUrl}
                            minJdSalary={item.minJdSalary} 
                            maxJdSalary={item.maxJdSalary}
                            salaryCurrencyCode={item.salaryCurrencyCode}  />
            </Grid>
            ))}
            </Grid>
            <div>
                {isLoading && <CircularProgress sx={{
                color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                animationDuration: '550ms',
                position: 'absolute',
                alignItems: 'center',
                left: 0
                }} color="secondary"/>}
            </div>
        </div>
      );
};

export default JobPostList;