import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function NavBar({ mode, setMode }) {
  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1 }} className="navbar">
        <AppBar position="static" className="navbar">
          <Toolbar>
            <Button color="inherit">
              <span>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </span>
            </Button>

            <Button color="inherit">
              <span>
                <NavLink className="nav-link" to="/add-product">
                  AddProduct
                </NavLink>
              </span>
            </Button>
            <Button
              startIcon={
                mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "Light" : "Dark"}mode
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
