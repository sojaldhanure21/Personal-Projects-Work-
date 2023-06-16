import * as React from "react";
import AppBar from "@mui/material/AppBar";
import "./modifySearch.module.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LandscapeIcon from "@mui/icons-material/Landscape";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const pages = [,];
const settings = ["Sign-up", "Sign-in"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    border:"2px solid #ebebeb",
    backgroundColor: "#ebebeb",
    borderRadius: "40px",
  padding: theme.spacing(0, 1),
  height: "80%",
  position: "absolute",
  left: "40vw",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#ebebeb",
  marginRight: "4px",
  color: "#000",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenNavMenu = (event) => {    
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#fff" , marginBottom: "20px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Container sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <div className="mountain-icon">
              <img src="" alt="todo" />
            </div>
            <Typography
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
              }}
            >
              <span className="navBarTittle">Travels</span>
            </Typography>
          </Container> */}

          {/* <Container sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <div className="mountain-icon-md">
              <img src="mountain.png" alt="mountain" />
            </div>
            <Typography
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                textDecoration: "none",
              }}
            >
              <span className="navBarTittle-md">Travels</span>
            </Typography>
          </Container> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          <SearchIconWrapper>
              <Search>    
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            <SearchIcon
              className="searchIcon"
              style={{
                backgroundColor: "#0B8ABB",
                color: "#fff",
                borderRadius: "20px",
                padding: "4px",
                fontSize: "2rem",
              }}
            />
          </SearchIconWrapper>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar style={{backgroundColor:"#4ebce7"}}  src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
