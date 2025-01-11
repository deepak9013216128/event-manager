"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Button, IconButton, List, ListItem, styled } from "@mui/material";
import { Link } from "@mui/material";
import { useEffect, useState } from "react";

function Header({ user }) {
  const [isOpen, setOpen] = useState(false);

  const pages = [
    { label: "Home", path: "/" },
    {
      label: "About-us",
      path: "/about-us",
    },
    {
      label: "Contact-us",
      path: "/contact-us",
    },
    // { label: "Events", path: "/events" },
    // { label: "Trips", path: "/trips" },
    // { label: "Media", path: "/media" },
  ];

  return (
    <AppBar elevation={0} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="logo"
              width={48}
              height={48}
              quality={100}
              priority
            />
          </Link>
          <Box>
            <List
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <ListItem key={page.label} sx={{ minWidth: 120 }}>
                  <Link href={page.path} color="textPrimary">
                    {page.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box ml="auto">
            <Button
              variant="outlined"
              sx={{
                borderRadius: 12,
                color: "#fff",
                border: "1px solid #fff",
              }}
              href="/login"
            >
              Join Comunity
            </Button>
          </Box>

          {/* <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              ml: "auto",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              mx={2}
              sx={{
                width: 78,
                height: 78,
              }}
            >
              <Image
                src="/assets/icons/hamburger.svg"
                alt="icon"
                width={54}
                height={12}
              />
            </IconButton>
          </Box> */}
        </Toolbar>
      </Container>
      {/* <SlideDrawer
        open={isOpen}
        user={user}
        onClose={() => setOpen(false)}
        pages={pages}
        dynamicShopDropdown={dynamicShopDropdown}
      /> */}
    </AppBar>
  );
}

export default Header;
