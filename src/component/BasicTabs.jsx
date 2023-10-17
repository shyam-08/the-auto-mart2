import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FinanceCar from './FinanceCar';
import BuyingCar from './BuyingCar';
import SellingCar from './SellingCar';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {/* <div style={{padding:"10px",border:"1px solid black",textAlign:"center",margin:"10px"}}> */}
            {/* <h1> */}
              {/* <img src="src\component\img\benefit-automobilegrowth-icon.png" alt="" /> */}
            {/* </h1> */}
            <Tab label="Finacing Car" {...a11yProps(0)} />

          {/* </div> */}
          {/* <div style={{padding:"10px",border:"1px solid black",textAlign:"center",margin:"10px"}}> */}
            {/* <h1><img src="src\component\img\benefit-automobilegrowth-icon.png" alt="" /></h1> */}

            <Tab label="Buying Car" {...a11yProps(1)} />
          {/* </div> */}
          {/* <div style={{padding:"10px",border:"1px solid black",textAlign:"center",margin:"10px"}}> */}
            {/* <h1> */}
              {/* <img src="src\component\img\benefit-automobilegrowth-icon.png" alt="" /> */}
              {/* </h1> */}

            <Tab label="Selling Car" {...a11yProps(2)} />
            {/* </div> */}
          {/* <div style={{padding:"10px",border:"1px solid black",textAlign:"center",margin:"10px"}}> */}
            {/* <h1> */}
              {/* <img src="src\component\img\benefit-automobilegrowth-icon.png" alt="" /> */}
              {/* </h1> */}

            <Tab label="Payment Procesure" {...a11yProps(3)} />
            {/* </div> */}
          {/* <div style={{padding:"10px",border:"1px solid black",textAlign:"center",margin:"10px"}}> */}
            {/* <h1><img src="src\component\img\benefit-automobilegrowth-icon.png" alt="" /></h1> */}

            <Tab label="About Tam" {...a11yProps(4)} />
            {/* </div> */}

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FinanceCar />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BuyingCar />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SellingCar />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SellingCar />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <SellingCar />
      </CustomTabPanel>
    </Box>
  );
}
;