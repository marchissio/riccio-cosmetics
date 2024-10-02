import React from "react";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";

const Contact: React.FC = () => {
    return (
        <>
            <PageHeader title="Contact us" subtitle="Home - Contact" />
            <ContactSection />
        </>
    );
};

export default Contact;
