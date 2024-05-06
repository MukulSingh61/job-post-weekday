import Box from '@mui/material/Box';
import { Card, CardContent, CardActions, Button, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';

function JobCard({companyName, jobDetailsFromCompany, location, jobRole, logoUrl, minJdSalary, maxJdSalary, salaryCurrencyCode })
{
    console.log(companyName)
    const card = (
        <CardContent>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                <div>
                    <img src={logoUrl} alt="logo" />
                </div>
                <div>
                    <Typography sx={{ fontSize: 14 }} variant="b" color="text.secondary" gutterBottom>
                        {companyName}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} variant="h6" component="div">
                        {jobRole}
                    </Typography>
                    <Typography sx={{ fontSize: 12}} variant="h6" component="div">
                        {location}
                    </Typography>
                </div>
                <div>
                    <Typography sx={{ fontSize: 14 }} variant="b" color="text.secondary" gutterBottom>
                            Estimated Salary: {minJdSalary} - {maxJdSalary} {salaryCurrencyCode}
                    </Typography>
                    <Typography sx={{ fontSize: 15 }} component="div">
                        <Typography sx={{ fontSize: 15 }} variant="h6" component="div">
                                About Company
                        </Typography>
                        { jobDetailsFromCompany }
                        <div>
                           <Button>Show More</Button> 
                        </div>
                    </Typography>
                </div>
            </Stack>
            
            

            <CardActions>
                <Button size="medium" varient="contained">Apply</Button>
            </CardActions>
        </CardContent>
    );

    return (
        <div className="job-card-container">
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    );
}

export default JobCard;