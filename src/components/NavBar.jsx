import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import styles from "./NavBar.module.css";
import Logo from "../assets/logo.png";

function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none", width: "100%" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1475px", // Set a maximum width
          margin: "0 auto", // Center the toolbar
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white, less opaque for a subtle effect
          backdropFilter: "blur(10px)", // Frosted glass effect
          borderRadius: "8px", // Rounded corners (optional)
          padding: "0 20px", // Padding on the left and right
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)", // Darker shadow for more contrast on a dark background
          border: "1px solid rgba(255, 255, 255, 0.2)", // Optional: border to enhance the glass effect
        }}
      >
        <Link to="/">
          <img className={styles.img} src={Logo} alt="logo" />
        </Link>
        <div>
          <Button color="inherit" component={Link} to="/">
            Movies
          </Button>
          <Button color="inherit" component={Link} to="/actors">
            Actors
          </Button>
          <Button color="inherit" component={Link} to="/tvshows">
            TV Shows
          </Button>
          <Button color="inherit" component={Link} to="/series">
            Series
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
