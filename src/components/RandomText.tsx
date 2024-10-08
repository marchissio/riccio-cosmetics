import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import haircut from "../assets/haircut.jpg";
import haircut1 from "../assets/haircut1.jpg";
import haircut2 from "../assets/haircut2.jpg";
import haircut3 from "../assets/haircut3.jpg";
import random from "../assets/about-shape-1.png";
import PageHeader from "./PageHeader";

const RandomText = () => {
    const location = useLocation();

    const showRandomText =
        location.pathname === "/" || location.pathname === "/about";

    if (!showRandomText) {
        return null;
    }

    return (
        <Box>
            {location.pathname === "/about" && (
                <PageHeader title="About Us" subtitle="Home - About" />
            )}

            <Box
                sx={{
                    paddingLeft: "250px",
                    paddingRight: "250px",
                    paddingTop: "120px",
                    paddingBottom: "100px",
                    backgroundColor: "#fff",
                    fontFamily: '"Oswald", sans-serif',
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "30px",
                    marginTop: location.pathname === "/about" ? "-100px" : "0",
                }}
            >
                {/* Left Side Text */}
                <Box
                    sx={{
                        flex: 1,
                        textAlign: { xs: "center", md: "left" },
                        marginLeft: "80px",
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: "Oswald, sans-serif",
                                fontWeight: "600",
                                fontSize: "1.5rem",
                                marginBottom: "-20px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Provide the best
                        </h2>
                        {/* Divider line */}
                        <Box
                            sx={{
                                width: "70px",
                                height: "0.5px",
                                marginTop: "45px",
                                marginLeft: "20px",
                                backgroundColor: " #c8c8c8",
                            }}
                        />
                    </Box>

                    {/* Vertical Lines and Text */}
                    <Box
                        sx={{
                            position: "relative",
                        }}
                    >
                        {/* Vertical lines */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: "-24px",
                                top: "110px",
                                height: "50%",
                                width: "1px",
                                backgroundColor: "#c8c8c8",
                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                left: "-30px",
                                top: "100px",
                                height: "50%",
                                width: "1px",
                                backgroundColor: "#c8c8c8",
                            }}
                        />

                        <h1
                            style={{
                                fontFamily: "Oswald, sans-serif",
                                fontWeight: "bold",
                                fontSize: "3rem",
                            }}
                        >
                            Beard Oil For You
                        </h1>
                        <p
                            style={{
                                fontFamily: '"Open-sans", sans-serif',
                                fontSize: "15px",
                                marginBottom: "20px",
                                lineHeight: "1.6",
                            }}
                        >
                            We provide the best Beard oil all over the world. We
                            are the world's <br />
                            best store for Beard Oil. You can buy our product
                            without <br /> any hesitation because we always
                            ensure our product's quality. <br /> You can trust
                            us!
                        </p>
                        <p
                            style={{
                                fontFamily: '"Open-sans", sans-serif',
                                fontSize: "15px",
                                marginBottom: "20px",
                                lineHeight: "1.6",
                            }}
                        >
                            Some of our customers say that they trust us and buy
                            our <br />
                            product without any hesitation because they believe
                            in <br />
                            our commitment to quality.
                        </p>
                        <Button
                            component={Link}
                            to="/about"
                            sx={{
                                display: "inline-block",
                                backgroundColor: "#222222",
                                color: "#d0a97e",
                                borderColor: "#222222",
                                borderRadius: "50px",
                                fontFamily: "Oswald, sans-serif",
                                fontSize: "18px",
                                height: "46px",
                                padding: "9px 30px",
                                textTransform: "capitalize",
                                fontWeight: "600",
                                letterSpacing: "0.25px",
                                lineHeight: "24px",
                                border: "1px solid #222222",
                                boxShadow:
                                    "rgba(0, 0, 0, 0.24) 0 2px 2px, rgba(0, 0, 0, 0.4) 0 8px 12px",
                                "&:hover": {
                                    backgroundColor: "#f5c242",
                                    color: "#222222",
                                    border: "1px solid #f5c242",
                                },
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Box>

                {/* Right Side Images */}
                <Box
                    sx={{
                        flex: 1,
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "10px",
                    }}
                >
                    <img
                        src={haircut1}
                        alt="Haircut 1"
                        style={{
                            width: "80%",
                            borderRadius: "10px",
                            objectFit: "cover",
                        }}
                    />
                    <img
                        src={haircut2}
                        alt="Haircut 2"
                        style={{
                            width: "100%",
                            borderRadius: "10px",
                            objectFit: "cover",
                        }}
                    />
                    <img
                        src={haircut}
                        alt="Haircut"
                        style={{
                            width: "100%",
                            borderRadius: "10px",
                            objectFit: "cover",
                        }}
                    />
                    <img
                        src={haircut3}
                        alt="Haircut 3"
                        style={{
                            width: "100%",
                            borderRadius: "10px",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default RandomText;
