// import { useEffect, useState, useRef } from "react";
// import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
// import { useProSidebar } from "react-pro-sidebar";

// import { useSidebarContext } from "./sidebarContext";

// import { Link, useNavigate } from "react-router-dom";
// // import { tokens } from "./theme";
// import { useTheme, Box, Typography, IconButton } from "@mui/material";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
// import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   console.log(to);
//   // const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   const navigate = useNavigate();
//   const handleNavigate = (e) => {
//     const route = to;
//     setSelected(title);
//     navigate(`${route}`);
//   };
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{ color: "#000", backgroundColor: "transparent" }}
//       icon={icon}
//       onClick={handleNavigate}
//     >
//       <Typography>{title}</Typography>
//     </MenuItem>
//   );
// };

// const MyProSidebar = () => {
//   const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   const [selected, setSelected] = useState("Tracking");

//   const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
//   const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
//   const childRef = useRef(null);

//   useEffect(() => {});
//   return (
//     <Box
//       sx={{
//         position: "sticky",
//         display: "flex",
//         height: "100vh",
//         top: 0,
//         backgroundColor: "#00254d",
//         bottom: 0,
//         zIndex: 10000,
//       }}
//     >
//       <Sidebar
//         breakPoint="md"
//         rtl={sidebarRTL}
        
//         image={sidebarImage}
//         sx={{backgroundColor: "#00254d"}}
//       >
//         <Menu sx={{backgroundColor: "#00254d"}}>
//           <MenuItem
//             icon={
//               collapsed ? (
//                 <MenuOutlinedIcon onClick={() => collapseSidebar()} />
//               ) : (
//                 ""
//               )
//             }
//             style={{
//               margin: "10px 0 20px 0",
//               color: "#000",
//             }}
//           >
//             {!collapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//               >
//                 {/* <Typography
//                   sx={{
//                     fontSize: "16px",
//                     fontFamily: "Acrom",
//                     fontWeight: "Bold",
//                   }}
//                   color={colors.grey[100]}
//                 ></Typography> */}

//                 <IconButton
//                   onClick={
//                     broken ? () => toggleSidebar() : () => collapseSidebar()
//                   }
//                   sx={{ color: "#000" }}
//                 >
//                   <CloseOutlinedIcon color="#000" />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>

//           <Box paddingLeft={collapsed ? undefined : "1px"}>
//             <Item
//               title="Tracking"
//               to="/tracking"
//               icon={<BiCurrentLocation size="25px" color="#000" />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Item
//               title="Sea Solution"
//               to="/seasolutions"
//               icon={<GiCargoShip sixe="30px" color="#000" />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Item
//               title="Air Solution"
//               to="/airsolutions"
//               icon={<SlPlane size="25px" color="#000" />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Setting"
//               to="/setting"
//               icon={<FiSettings size="22px" color="#000" />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           </Box>
//         </Menu>
//       </Sidebar>
//     </Box>
//   );
// };

// export default MyProSidebar;
// export { Item };

import { useEffect, useState , useRef } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";

import { Link, useNavigate } from "react-router-dom";
import { tokens } from "./theme";
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
const Item = ({ title, to, icon, selected, setSelected , open, setOpen }) => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    setSelected(title);
    navigate(`${to}`);
  };
  return (
    <MenuItem
      active={selected === title}
      style={{ color: "#fff" , backgroundColor: "transparent"}}
      onClick={handleNavigate}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const [modal, setModal] = useState(false);
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  const childRef = useRef(null);
  const handleOpen=()=>{
    setOpen(true)
  }
 const  handleClose=()=>{
    setOpen(false)
  }
  useEffect(()=>{
    
  })
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "95vh",
        top: 0,
        backgroundColor: "#000",
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={"#00254d"}
        image={sidebarImage}
      >
         <Menu iconshape="square">
          <Box paddingLeft={"10px"} sx={{marginTop: "50px"}}>
          <Item
              title="Tracking"
              to="/tracking"
              icon={<BiCurrentLocation size="25px" color="#fff" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Sea Solution"
              to="/seasolutions"
              icon={<GiCargoShip sixe="30px" color="#fff" />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Air Solution"
              to="/airsolutions"
              icon={<SlPlane size="25px" color="#fff" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Setting"
              to="/setting"
              icon={<FiSettings size="22px" color="#fff" />}
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

