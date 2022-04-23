import React, {useEffect} from "react";
import { makeStyles } from "@mui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useNavigate } from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    width: 500,
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    if(value === 0) navigate("/")
    if(value === 1) navigate("/movies")
    if(value === 2) navigate("/series")
    if(value === 3) navigate("/search")
  }, [value, navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white", backgroundColor: "#2d313a" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white", backgroundColor: "#2d313a" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white", backgroundColor: "#2d313a" }}
        label="Tv Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white", backgroundColor: "#2d313a" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
