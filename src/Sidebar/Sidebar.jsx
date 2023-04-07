import { useEffect, useState, useRef } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";

import { Link, useNavigate } from "react-router-dom";
// import { tokens } from "./theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import { BiCurrentLocation } from "react-icons/bi";
import { GiCargoShip } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { SlPlane } from "react-icons/sl";
const Item = ({ title, to, icon, selected, setSelected }) => {
  console.log(to);
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    const route = to;
    setSelected(title);
    navigate(`${route}`);
  };
  return (
    <MenuItem
      active={selected === title}
      style={{ color: "#000" }}
      icon={icon}
      onClick={handleNavigate}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Tracking");

  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  const childRef = useRef(null);

  useEffect(() => {});
  return (
    <Box
      sx={{
        
        display: "flex",
        height: "100vh",
        top: 0,
        backgroundColor: "#fff",
        bottom: 0,
        zIndex: 10000,
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        
        image={sidebarImage}
      >
        <Menu>
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : (
                ""
              )
            }
            style={{
              margin: "10px 0 20px 0",
              color: "#000",
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Acrom",
                    fontWeight: "Bold",
                  }}
                  color={colors.grey[100]}
                ></Typography> */}

                <IconButton
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                  sx={{ color: "#000" }}
                >
                  <CloseOutlinedIcon color="#000" />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={collapsed ? undefined : "1px"}>
            <Item
              title="Tracking"
              to="/tracking"
              icon={<BiCurrentLocation size="25px" color="#000" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Sea Solution"
              to="/seasolutions"
              icon={<GiCargoShip sixe="30px" color="#000" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Air Solution"
              to="/airsolutions"
              icon={<SlPlane size="25px" color="#000" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Setting"
              to="/setting"
              icon={<FiSettings size="22px" color="#000" />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
export { Item };
