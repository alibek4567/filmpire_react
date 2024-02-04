import { Grid, Box, Tabs, Stack, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'

const profileTabs = [
    {title: 'Общие данные', content: 'Общие данные'},
    {title: 'Опыт работы', content: 'Опыт работы'},
    {title: 'Публикации', content: 'Публикации'},
    {title: 'Образование', content: 'Образование'},
    {title: 'Рекомендательные письма', content: 'Рекомендательные письма'},
    {title: 'Еще', content: [
        {title: 'Контакты', content: "Контакты"},
        {title: 'Общие контакты', content: "Общие контакты"},
        {title: 'Подписчики', content: 'Подписчики'},
        {title: 'Компании', content: 'Компании'},
    ]},
] 

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

  function CustomTabPanel(props) {
    const { children, value, withSidebar = false, label, index, ...other } = props;
    console.log(label);
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }} display="flex">
            <Box minWidth={0} flex={1}>
                <Typography>{label}</Typography>
            </Box>
            {withSidebar && (
                <Box minWidth={180}>
                    <Typography>Sidebar</Typography>
                </Box>
            )}
          </Box>
        )}
      </div>
    );
  }  

const TabsProfile = () => {
    const [value, setValue] = useState(0);
    const [subValue, setSubValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const handleChange2 = (event, newValue) => {
        setSubValue(newValue);
    };
  return (  
    <Grid container spacing={1.5}>
        <Grid item xs={12} md={12}>
            <Box backgroundColor="red" height={300}></Box>
        </Grid>
        <Grid item xs={6} md={6}>
            <Box backgroundColor="red" height={86}></Box>
        </Grid>     
        <Grid item xs={6} md={6}>
            <Box backgroundColor="red" height={86}></Box>
        </Grid>
        <Grid item xs={12} md={12}>
            <Stack gap={2}>
                <Tabs variant="fullWidth" sx={{justifyContent: 'space-between'}} value={value} onChange={handleChange} aria-label="basic tabs example">
                {profileTabs.map((item, index) => (
                    <Tab label={item.title} {...a11yProps(index)}/>
                ))}
                </Tabs>
                <Box>
                    {profileTabs.map((item, index) => Array.isArray(item.content) ? (
                        <Stack gap={2} display={index === value ? 'flex' : 'none'}>
                            <Tabs sx={{justifyContent: 'space-between'}} value={subValue} onChange={handleChange2} aria-label="basic tabs example">
                                {item.content.map((subItem, index2) => (
                                    <Tab label={subItem.title} {...a11yProps(index2)}/>
                                ))}
                            </Tabs>
                            <Box>
                                {item.content.map((subItem, index2) => {
                                    <CustomTabPanel withSidebar label={subItem.title} value={subValue} index={index2}/>
                                })}
                            </Box>
                        </Stack>
                    ) : (
                        <CustomTabPanel label={item.title} value={value} index={index} style={{minWidth: 0, flex: 1}}/>
                    ))}
                </Box>
            </Stack>
        </Grid>
    </Grid>
  )
}

export default TabsProfile