import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PromotionsTable, CreatePromotion } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const Promotion = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Khuyến mãi" {...a11yProps(0)} />
          <Tab label="Tạo khuyến mãi" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className={classes.content}>
        <PromotionsTable />
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreatePromotion />
      </TabPanel>

      
    </div>
  );
};

export default Promotion;
