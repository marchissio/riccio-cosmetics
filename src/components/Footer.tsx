import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#222222",
                padding: "50px 0",
                marginTop: "-100px",
            }}
        >
            <Container>
                <Box
                    sx={{
                        paddingTop: "150px",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        mb: 3,
                    }}
                >
                    {/* Footer Info */}
                    <Box
                        sx={{
                            mb: { xs: 3, md: 0 },
                            flex: 2,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "white",
                                mb: 1,
                                fontSize: "15px",
                            }}
                        >
                            We provide the best Beard oil all over the world. We
                            are the world’s best store for Beard Oil. You can
                            buy our
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "white", fontSize: "15px" }}
                        >
                            228, East Zone, Momeno Tower
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "white", mb: 2, fontSize: "15px" }}
                        >
                            South City, England
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "white", mb: 2, fontSize: "15px" }}
                        >
                            +12546 687 987 / +15425 987 541
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "white", mb: 3, fontSize: "15px" }}
                        >
                            demo@example.com
                        </Typography>
                    </Box>

                    {/* Quick Links */}
                    <Box
                        sx={{
                            mb: { xs: 3, md: 0 },
                            flex: 1,
                            color: "white",
                            marginLeft: { md: "120px" },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ fontFamily: "Oswald", mb: 2 }}
                        >
                            Quick Link
                        </Typography>
                        {[
                            { text: "About us", path: "/about" },
                            { text: "Features", path: "/pages" },
                            { text: "Shop", path: "/shop" },

                            { text: "Pages", path: "/pages" },
                            { text: "Contact", path: "/contact" },
                        ].map((link) => (
                            <RouterLink
                                to={link.path}
                                style={{
                                    color: "#d8d8d8",
                                    textDecoration: "none",
                                }}
                                key={link.text}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "Open Sans",
                                        mb: 1,
                                        display: "block",
                                        "&:hover": { color: "#d0a97e" },
                                    }}
                                >
                                    {link.text}
                                </Typography>
                            </RouterLink>
                        ))}
                    </Box>

                    {/* Information */}
                    <Box
                        sx={{
                            mb: { xs: 3, md: 0 },
                            flex: 1,
                            color: "white",
                            marginLeft: { md: "80px" },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ color: "white", mb: 2, fontFamily: "Oswald" }}
                        >
                            Information
                        </Typography>
                        {[
                            "My Account",
                            "Terms & Conditions",
                            "Order Tracking",
                            "Payment System",
                            "Return Policy",
                            "Promotional Offers",
                        ].map((linkText) => (
                            <Typography
                                sx={{
                                    fontFamily: "Open Sans",
                                    mb: 1,
                                    display: "block",
                                    color: "#d8d8d8",
                                    "&:hover": { color: "#d0a97e" },
                                }}
                                key={linkText}
                            >
                                {linkText}
                            </Typography>
                        ))}
                    </Box>

                    {/* Follow Us */}
                    <Box
                        sx={{
                            flex: 1,
                            color: "white",
                            marginLeft: "100px",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ color: "white", mb: 2, fontFamily: "Oswald" }}
                        >
                            Follow us
                        </Typography>
                        {[
                            "Facebook",
                            "Twitter",
                            "Instagram",
                            "LinkedIn",
                            "Google Plus",
                            "YouTube",
                        ].map((linkText) => (
                            <Typography
                                sx={{
                                    fontFamily: "Open Sans",
                                    mb: 1,
                                    display: "block",
                                    color: "#d8d8d8",
                                    "&:hover": { color: "#d0a97e" },
                                }}
                                key={linkText}
                            >
                                {linkText}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
