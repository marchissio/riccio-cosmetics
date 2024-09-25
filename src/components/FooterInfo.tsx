import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeliveryIcon from "../assets/haircut.jpg";
import QualityIcon from "../assets/haircut.jpg";
import ReturnIcon from "../assets/haircut.jpg";
import SupportIcon from "../assets/haircut.jpg";

const services = [
    {
        title: "Free home delivery",
        description: "Provide free home delivery for all products over $100",
        icon: (
            <img
                src={DeliveryIcon}
                alt="Free home delivery"
                style={{ width: "40px", height: "40px" }}
            />
        ),
    },
    {
        title: "Quality Products",
        description: "We ensure the product quality that is our main goal",
        icon: (
            <img
                src={QualityIcon}
                alt="Quality Products"
                style={{ width: "40px", height: "40px" }}
            />
        ),
    },
    {
        title: "3 Days Return",
        description: "Return product within 3 days for any product you buy",
        icon: (
            <img
                src={ReturnIcon}
                alt="3 Days Return"
                style={{ width: "40px", height: "40px" }}
            />
        ),
    },
    {
        title: "Online Support",
        description: "We ensure the product quality that you can trust easily",
        icon: (
            <img
                src={SupportIcon}
                alt="Online Support"
                style={{ width: "40px", height: "40px" }}
            />
        ),
    },
];

const FooterServices: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                borderRadius: "150px",
                padding: "25px",
                marginBottom: "-90px",
                position: "relative",
                zIndex: 9,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "95%",
                margin: "auto",
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
                    }}
                >
                    <Box sx={{ marginRight: "15px" }}>{service.icon}</Box>
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
                    {/*  vertical divider  */}
                    {index < services.length - 1 && (
                        <Box
                            sx={{
                                width: "1px",
                                height: "100px",
                                backgroundColor: "#ebebeb",
                                margin: "0 20px",
                            }}
                        />
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default FooterServices;
