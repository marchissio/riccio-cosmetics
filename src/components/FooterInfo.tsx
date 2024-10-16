import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import airplane1 from "../assets/airplane.png";
import airplane2 from "../assets/airplaneOrange.png";
import medal from "../assets/medal.png";
import medal2 from "../assets/medalOrange.png";
import arrows from "../assets/arrows.png";
import arrows2 from "../assets/arrowsOrange.png";
import headphones from "../assets/headphones.png";
import headphones2 from "../assets/headphonesOrange.png";

const services = [
    {
        title: "Free home delivery",
        description: "Provide free home delivery for all products over $100",
        icon: null,
    },
    {
        title: "Quality Products",
        description: "We ensure the product quality that is our main goal",
        icon: null,
    },
    {
        title: "3 Days Return",
        description: "Return product within 3 days for any product you buy",
        icon: null,
    },
    {
        title: "Online Support",
        description: "We ensure the product quality that you can trust easily",
        icon: null,
    },
];

const FooterServices: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                borderRadius: "150px",
                padding: "25px",
                marginTop: "150px",
                marginBottom: "25px",
                position: "relative",
                zIndex: 9,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "1450px",
                marginLeft: "auto",
                marginRight: "auto",
                border: "2px solid #ebebeb",
            }}
        >
            {services.map((service, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        flex: 1,
                        margin: "0 5px",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Airplane icons with hover animation */}
                    {index === 0 ? (
                        <Box
                            sx={{
                                width: "54px",
                                height: "43px",
                                position: "relative",
                                marginRight: "50px",
                                "&:hover .airplane1": {
                                    opacity: 0,
                                    transform: "translateY(-100%)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "&:hover .airplane2": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "& .airplane1": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "& .airplane2": {
                                    opacity: 0,
                                    transform: "translateY(100%)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                            }}
                        >
                            <img
                                src={airplane1}
                                alt="airplane1"
                                className="airplane1"
                                style={{
                                    position: "absolute",
                                    width: "54px",
                                    height: "43px",
                                }}
                            />
                            <img
                                src={airplane2}
                                alt="airplane2"
                                className="airplane2"
                                style={{
                                    position: "absolute",
                                    width: "54px",
                                    height: "43px",
                                }}
                            />
                        </Box>
                    ) : index === 1 ? (
                        <Box
                            sx={{
                                width: "52px",
                                height: "43px",
                                position: "relative",
                                marginRight: "50px",
                                "&:hover .medal": {
                                    opacity: 0,
                                    transform: "translateY(-100%)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "&:hover .medal2": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "& .medal": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "& .medal2": {
                                    opacity: 0,
                                    transform: "translateY(100%)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                            }}
                        >
                            <img
                                src={medal}
                                alt="medal"
                                className="medal"
                                style={{
                                    position: "absolute",
                                    width: "52px",
                                    height: "43px",
                                }}
                            />
                            <img
                                src={medal2}
                                alt="medal2"
                                className="medal2"
                                style={{
                                    position: "absolute",
                                    width: "52px",
                                    height: "43px",
                                }}
                            />
                        </Box>
                    ) : index === 2 ? (
                        <Box
                            sx={{
                                width: "52px",
                                height: "43px",
                                position: "relative",
                                marginRight: "50px",
                                "&:hover .arrows": {
                                    opacity: 0,
                                    transform: "translateY(-100%)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "&:hover .arrows2": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "& .arrows": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "& .arrows2": {
                                    opacity: 0,
                                    transform: "translateY(100%)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                            }}
                        >
                            <img
                                src={arrows}
                                alt="arrows"
                                className="arrows"
                                style={{
                                    position: "absolute",
                                    width: "52px",
                                    height: "43px",
                                }}
                            />
                            <img
                                src={arrows2}
                                alt="arrows2"
                                className="arrows2"
                                style={{
                                    position: "absolute",
                                    width: "42px",
                                    height: "43px",
                                    marginLeft: "5px",
                                }}
                            />
                        </Box>
                    ) : index === 3 ? (
                        <Box
                            sx={{
                                width: "52px",
                                height: "43px",
                                position: "relative",
                                marginRight: "50px",
                                "&:hover .headphones": {
                                    opacity: 0,
                                    transform: "translateY(-100%)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "&:hover .headphones2": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "& .headphones": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                                "& .headphones2": {
                                    opacity: 0,
                                    transform: "translateY(100%)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                },
                            }}
                        >
                            <img
                                src={headphones}
                                alt="headphones"
                                className="headphones"
                                style={{
                                    position: "absolute",
                                    width: "52px",
                                    height: "43px",
                                }}
                            />
                            <img
                                src={headphones2}
                                alt="headphones2"
                                className="headphones2"
                                style={{
                                    position: "absolute",
                                    width: "52px",
                                    height: "43px",
                                }}
                            />
                        </Box>
                    ) : (
                        <Box sx={{ marginRight: "15px" }}>{service.icon}</Box>
                    )}
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "500",
                                marginBottom: "10px",
                                fontFamily: '"Oswald", sans-serif',
                            }}
                        >
                            {service.title}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: '"Open-sans", sans-serif',
                            }}
                        >
                            {service.description}
                        </Typography>
                    </Box>
                    {index < services.length - 1 && (
                        <Box
                            sx={{
                                width: "3px",
                                height: "100px",
                                backgroundColor: "#ebebeb",
                                margin: "0 20px 0px 22px",
                            }}
                        />
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default FooterServices;
