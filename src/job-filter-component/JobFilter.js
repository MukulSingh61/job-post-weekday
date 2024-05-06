import * as React from 'react';
import { TextField, Stack, Divider, FormControl, InputLabel,
    Select, OutlinedInput, MenuItem, Box, Chip
} from "@mui/material";
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, inName, theme) {
    return {
      fontWeight:
        inName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const roles_list = [
    "Android Development",
    "Frond End Engineer"
]
const no_of_employes_list = [
    "1-10",
    "11-20",
    "21-50",
    "51-100",
    "101-200",
    "200-500",
    "500+"
]
const tech_stack_list = [
    "C",
    "C++",
    "Python",
    "Java",
    "Kotlin",
    "GoLang",
    "NodeJs",
    "Flask"
]
const job_type_list = [
    "Remote",
    "Hybrid",
    "Onsite"
]

function JobFilter()
{
    const theme = useTheme();
  const [roleName, setRoleName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setRoleName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  const [experience, setExperience] = React.useState('');
  const handleExperienceChange = (event) => {
    const {
        target: { value },
      } = event;
      setExperience(value);
  }

  const [noofEmploye, setNoOfEmployees] = React.useState([]);
  const handleNoOfEmployeeChange = (event)=>{
    const {
        target: { value },
      } = event;
      setNoOfEmployees(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
  };

  const [jobTypeName, setJobType] = React.useState([]);
  const handleJobTypeChange = (event) => {
    const {
        target: { value },
      } = event;
      setJobType(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
  };
  const [techStackName, setTechStack] = React.useState([]);
  const handleTechStackChange = (event) => {
    const {
        target: { value },
      } = event;
      setTechStack(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
  };
  const [minBasePayInfo, setMinBasePay] = React.useState('');
  const handleBasePayChange = (event) => {
    const {
        target: { value },
      } = event;
      setMinBasePay(value);
  }

    return(
        <div>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                >
                <div className="roles">
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-multiple-chip-label">Roles</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={roleName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip"
                        autowidth="true" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        >
                        {roles_list.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, roleName, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="experience">
                    <Box sx={{ m: 1, minWidth: 80 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Experience</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={handleExperienceChange}
                            value={experience}
                            label="Experience"
                            autowidth="true"
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="no-of-emplye">
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-multiple-chip-label">No of Emp</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={noofEmploye}
                        onChange={handleNoOfEmployeeChange}
                        
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        >
                        {no_of_employes_list.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, noofEmploye, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="job-type">
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-multiple-chip-label">Job Type</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={jobTypeName}
                        onChange={handleJobTypeChange}
                        input={<OutlinedInput id="select-multiple-chip"
                        autowidth="true" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        >
                        {job_type_list.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, jobTypeName, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="tech-stack">
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-multiple-chip-label">Tech Stack</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={techStackName}
                        onChange={handleTechStackChange}
                        input={<OutlinedInput id="select-multiple-chip"
                        autowidth="true" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        >
                        {tech_stack_list.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, techStackName, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="min-base-package">
                    <Box sx={{ m: 1, minWidth: 80 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Min. Base Package</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={handleBasePayChange}
                            value={minBasePayInfo}
                            label="Min. Base Package"
                            autowidth="true"
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <TextField varient="outlined" label="Search Company Name"></TextField>
            </Stack>
        </div>
    );
}

export default JobFilter;