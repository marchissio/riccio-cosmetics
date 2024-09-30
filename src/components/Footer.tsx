import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

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
                    <Box sx={{ mb: { xs: 3, md: 0 }, flex: 2 }}>
                        <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
                            We provide the best Beard oil all over the world. We
                            are the world’s best store for Beard Oil. You can
                            buy our
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "white", mb: 2 }}
                        >
                            228, East Zone, Momeno Tower
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "white", mb: 2 }}
                        >
                            South City, England
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "white", mb: 2 }}
                        >
                            +12546 687 987 / +15425 987 541
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "white", mb: 3 }}
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
                            marginLeft: { md: "120px" }, // Adjust margin left for larger screens
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ fontFamily: "Oswald", mb: 2 }}
                        >
                            Quick Link
                        </Typography>
                        {[
                            "About us",
                            "Features",
                            "Shop",
                            "Blog",
                            "Pages",
                            "Contact",
                        ].map((linkText) => (
                            <Link
                                href="#"
                                color="#d8d8d8"
                                underline="hover"
                                sx={{
                                    fontFamily: "Open Sans",
                                    display: "block",
                                    mb: 1, // Adds space between links
                                    "&:hover": { color: "#d0a97e" },
                                }}
                                key={linkText}
                            >
                                {linkText}
                            </Link>
                        ))}
                    </Box>

                    {/* Information */}
                    <Box
                        sx={{
                            mb: { xs: 3, md: 0 },
                            flex: 1,
                            color: "white",
                            marginLeft: { md: "80px" }, // Adjust margin left for larger screens
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
                            <Link
                                href="#"
                                color="#d8d8d8"
                                underline="hover"
                                sx={{
                                    fontFamily: "Open Sans",
                                    display: "block",
                                    mb: 1, // Adds space between links
                                    "&:hover": { color: "#d0a97e" },
                                }}
                                key={linkText}
                            >
                                {linkText}
                            </Link>
                        ))}
                    </Box>

                    {/* Follow us */}
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
                            <Link
                                href="#"
                                color="#d8d8d8"
                                underline="hover"
                                sx={{
                                    fontFamily: "Open Sans",
                                    display: "block",
                                    mb: 1, // Adds space between links
                                    "&:hover": { color: "#d0a97e" },
                                }}
                                key={linkText}
                            >
                                {linkText}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
