import Box from "@mui/material/Box";
import bannerImage from "../assets/banner-1.webp";

const Banner = () => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "950px", 
                margin: "0 auto", 
                paddingTop: "50px", 
            }}
        >
            <img
                src={bannerImage}
                alt="Banner"
                style={{
                    width: "100%",
                    display: "block",
                    verticalAlign: "middle",
                }}
            />
        </Box>
    );
};

export default Banner;
