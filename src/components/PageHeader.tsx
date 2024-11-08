import React from "react";
import { Box } from "@mui/material";

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
        <Box sx={{ padding: "0px", paddingTop: "25px" }}>
            <Box
                sx={{
                    backgroundColor: "#0b1521",
                    color: "#d8d8d8",
                    padding: "60px",
                    textAlign: "center",
                    fontSize: "1rem",
                    fontFamily: '"Oswald", sans-serif',
                    marginBottom: "20px",
                    zIndex: 1100,
                }}
            >
                <h1
                    style={{
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: "48px",
                        fontWeight: "500",
                        letterSpacing: "0.1px",
                        paddingTop: "20px",
                    }}
                >
                    {title}
                </h1>
                <p
                    style={{
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: "1rem",
                    }}
                >
                    {subtitle}
                </p>
            </Box>
        </Box>
    );
};

export default PageHeader;
