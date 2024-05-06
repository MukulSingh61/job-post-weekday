import React from 'react';
import ReactDOM from 'react-dom/client';
import Box from '@mui/material/Box';
import { Card, CardContent, CardActions, 
    Button, Stack, Modal } from "@mui/material";
import Typography from '@mui/material/Typography';
import lightning from '../lightning-icon.svg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function JobCard({companyName, jobDetailsFromCompany, location, jobRole, logoUrl, 
    minJdSalary, maxJdSalary, salaryCurrencyCode, minExp, maxExp })
{
    const [fullJobDescription, setFullJobDescription] = React.useState(jobDetailsFromCompany);
    const [open, setOpen] = React.useState(false); // state to open model when clicked on show more btn
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        {jobDetailsFromCompany.length > 150 ? `${jobDetailsFromCompany.slice(0, 150)}...` : jobDetailsFromCompany}
                        { jobDetailsFromCompany.length > 150 ?
                        <div>
                           <Button onClick={handleOpen}>Show More</Button>
                           <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Job Description
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        {fullJobDescription}
                                    </Typography>
                                </Box>
                            </Modal> 
                        </div>
                        :<p></p>}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} variant="b" color="text.secondary" gutterBottom>
                        Minimum Experience
                    </Typography>
                    <Typography sx={{ fontSize: 15 }} component="div">
                        {minExp !== null || maxExp !== null ? (
                            <p>
                            {/* Display the non-null value */}
                            {minExp !== null ? minExp : maxExp} Years
                            </p>
                        ) : (
                            <p>0 Years</p>
                        )}
                    </Typography>
                </div>
            </Stack>
            <CardActions>
                <Button size="medium" variant="contained" sx={{ width: '90%' }}>
                    <img src={lightning} alt="thunder" width="5%" height="5%"/>
                     Apply
                </Button>
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