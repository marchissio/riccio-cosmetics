import React from "react";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";

const Contact: React.FC = () => {
    return (
        <>
            <PageHeader title="Contact" subtitle="Home-contect" />
            <ContactSection />
        </>
    );
};

export default Contact;
