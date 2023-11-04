"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContent } from "@/components";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const strings = {
  yesterday: "دیروز",
  today: "امروز",
  tomorrow: "فردا",
};

const formatDate = (date: string | number | Date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const getInitialDates = () => {
  const dates = [];
  for (let i = 8; i >= 1; i--) {
    dates.push(formatDate(new Date().getTime() - i * 24 * 60 * 60 * 1000));
  }
  dates.push(formatDate(new Date().getTime()));
  for (let i = 1; i < 9; i++) {
    dates.push(formatDate(new Date().getTime() + i * 24 * 60 * 60 * 1000));
  }
  return dates;
};

function CustomTabPanel(props: TabPanelProps) {
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
        <Box display="flex" justifyContent="center" sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = useState(8);
  const [initialDates, setInitialDates] = useState<any>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const dates = getInitialDates();
    setInitialDates(dates);
  }, []);

  const {
    ref: earliestRef,
    inView: earliestInView,
    entry: earliestEntry,
  } = useInView({
    threshold: 1,
  });
  const {
    ref: latestRef,
    inView: latestInview,
    entry: latestEntry,
  } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (earliestInView) {
      const dates = [];
      const earliestDate = earliestEntry?.target?.innerText;
      for (let i = 8; i >= 1; i--) {
        dates.push(
          formatDate(new Date(earliestDate).getTime() - i * 24 * 60 * 60 * 1000)
        );
      }
      setInitialDates([...dates, ...initialDates]);
    }
    if (latestInview) {
      const dates = [];
      const latestDate = latestEntry?.target?.innerText;
      for (let i = 1; i < 9; i++) {
        dates.push(
          formatDate(new Date(latestDate).getTime() + i * 24 * 60 * 60 * 1000)
        );
      }
      setInitialDates([...initialDates, ...dates]);
    }
  }, [earliestInView, latestInview]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="basic tabs example"
        >
          {initialDates.map((date: string, index: number) => (
            <Tab
              key={index}
              ref={
                index === 0
                  ? earliestRef
                  : index === initialDates.length - 1
                  ? latestRef
                  : null
              }
              label={
                index == 7
                  ? strings.yesterday
                  : index == 8
                  ? strings.today
                  : index == 9
                  ? strings.tomorrow
                  : date
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {initialDates.map((date: string, index: number) => (
        <CustomTabPanel key={date} value={value} index={index}>
          <TabContent date={date} />
        </CustomTabPanel>
      ))}
    </Box>
  );
}
