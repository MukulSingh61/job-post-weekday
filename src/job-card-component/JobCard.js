import Box from '@mui/material/Box';
import { Card, CardContent, CardActions, Button, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';

function JobCard()
{
    const card = (
        <CardContent>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                <div>
                    <img src="" alt="logo" />
                </div>
                <div>
                    <Typography sx={{ fontSize: 14 }} variant="b" color="text.secondary" gutterBottom>
                        Outbrain
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} variant="h6" component="div">
                        Senior Mobile Engineer
                    </Typography>
                    <Typography sx={{ fontSize: 12}} variant="h6" component="div">
                        Gurugram
                    </Typography>
                </div>
                <div>
                    <Typography sx={{ fontSize: 14 }} variant="b" color="text.secondary" gutterBottom>
                            Estimated Salary: ₹14 - 18 LPA
                    </Typography>
                    <Typography sx={{ fontSize: 15 }} component="div">
                        <Typography sx={{ fontSize: 15 }} variant="h6" component="div">
                                About Company
                        </Typography>
                        Outbrain (Nasdaq: OB) is a leading technology platform that drives business results by engaging people across the open web. Outbrain predicts moments of engagement to drive measurable outcomes for advertisers and publishers using AI and machine learning across more than 7,000 online properties globally. Founded in 2006, Outbrain is headquartered in New York with offices in Israel and across the United States, Europe, Asia-Pacific, and South America.
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