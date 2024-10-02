import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ContactSection: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                color: "white", 
                marginTop: "-50px",
            }}
        >
            {/* Left Section - Black Box */}
            <Box
                sx={{
                    width: "300px",
                    padding: "60px",
                    paddingTop: "100px",
                    bgcolor: "#222222",
                    borderRadius: 0,
                    marginRight: "40px",
                   
                    boxShadow: 3,
                    fontFamily: "Oswald",
                }}
            >
                <Typography variant="h6" sx={{ mb: 1, fontFamily: "Oswald" }}>
                    Address
                </Typography>
                <Typography sx={{ mb: 2, fontFamily: "Oswald" }}>
                    256, Central Town, Main Street Hilton Tower, New York
                </Typography>
                <hr
                    style={{
                        border: "1px solid #444",
                        margin: "10px 0",
                    }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Phone
                </Typography>
                <Typography sx={{ mb: 1, fontFamily: "Oswald" }}>
                    +8801265 897 568
                </Typography>
                <Typography sx={{ mb: 2, fontFamily: "Oswald" }}>
                    +8801235 598 656
                </Typography>
                <hr
                    style={{
                        border: "1px solid #444",
                        margin: "10px 0",
                    }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Web
                </Typography>
                <Typography sx={{ mb: 1, fontFamily: "Oswald" }}>
                    info@example.com
                </Typography>
                <Typography sx={{ fontFamily: "Oswald" }}>
                    www.example.com
                </Typography>
            </Box>

            {/* Right Section - White Box */}
            <Box
                sx={{
                    width: "650px",
                    padding: "20px",
                    bgcolor: "white",
                    color: "black",
                    marginTop: "-28px",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        mb: 2,
                        fontFamily: "Oswald",
                        fontSize: "24px",
                        fontWeight: 600,
                    }}
                >
                    Get in Touch
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    Terms & Conditions: deleniti atque corrupti sdolores et quas
                    molestias cepturi sint occaecati non similique sunt in culpa
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem.
                </Typography>

                {/* Form Fields */}
                <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        sx={{
                            marginRight: "20px",
                            flex: 1,
                            borderRadius: "50px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "50px",
                                paddingLeft: "25px", // Padding inside the input
                                color: "#656565",
                            },
                            "& fieldset": {
                                borderColor: "#ebebeb", // Border color
                            },
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        sx={{
                            flex: 1,
                            borderRadius: "50px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "50px",
                                paddingLeft: "25px",
                                color: "#656565",
                            },
                            "& fieldset": {
                                borderColor: "#ebebeb",
                            },
                        }}
                    />
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
                    <TextField
                        label="Phone"
                        variant="outlined"
                        sx={{
                            marginRight: "20px",
                            flex: 1,
                            borderRadius: "50px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "50px",
                                paddingLeft: "25px",
                                color: "#656565",
                            },
                            "& fieldset": {
                                borderColor: "#ebebeb",
                            },
                        }}
                    />
                    <TextField
                        label="Subject"
                        variant="outlined"
                        sx={{
                            flex: 1,
                            borderRadius: "50px",

                            "& .MuiOutlinedInput-root": {
                                borderRadius: "50px",
                                paddingLeft: "25px",
                                color: "#656565",
                            },
                            "& fieldset": {
                                borderColor: "#ebebeb",
                            },
                        }}
                    />
                </Box>

                <TextField
                    label="Write message here..."
                    variant="outlined"
                    rows={4}
                    sx={{
                        mb: 2,
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "20px",
                            padding: "20px 25px",
                            color: "#656565",
                        },
                        "& .MuiInputBase-input": {
                            lineHeight: "24px",
                            height: "120px",
                            resize: "vertical",
                        },
                        "& fieldset": {
                            borderColor: "#ebebeb",
                        },
                    }}
                />

                <Button
                    variant="contained"
                    sx={{
                        mt: "20px",
                        bgcolor: "#222222",
                        color: "#d0a97e",
                        fontFamily: "Oswald",
                        borderRadius: "50px",
                        fontSize: "18px",
                        lineHeight: "25px",
                        padding: "10px 30px",
                        fontWeight: "600",
                        "&:hover": {
                            backgroundColor: "#d0a97e",
                            color: "#222222",
                        },
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default ContactSection;
