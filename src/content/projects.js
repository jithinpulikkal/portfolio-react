import chatApp from "../assets/Lets chat.jpeg";
import alikStore from "../assets/alikstore.png";
import ledenChemicals from "../assets/ledenchemicals.png";

const projects = [
    {
        name: "Leden Chemicals Website",
        description:
            "A hosted business website for Leden Chemicals, built to present the company's chemical products and services with a clean, responsive web experience.",
        stack: ["React", "Business Website", "Responsive UI"],
        sourceCode: "",
        img: ledenChemicals,
        preview: "https://www.ledenchemicals.com/",
        previewLabel: "Visit website",
    },
    {
        name: "Alik Store Mobile App",
        description:
            "A production shopping app for discovering products across categories, saving favorites, tracking orders, and completing purchases with a smooth mobile-first flow.",
        stack: ["React Native", "Mobile App", "Ecommerce"],
        sourceCode: "",
        img: alikStore,
        preview: "https://play.google.com/store/apps/details?id=com.alikstore.shopping&hl=en_IN",
        previewLabel: "View app",
    },
    {
        name: "Alik Store Website",
        description:
            "A responsive ecommerce storefront for browsing accessories and branded devices with category-led navigation, promotional offers, and a clean purchase path.",
        stack: ["React", "Ecommerce", "Responsive UI"],
        sourceCode: "",
        img: alikStore,
        preview: "https://alik.store/",
        previewLabel: "Visit website",
    },

    {
        name: "Let's Chat",
        description:
            "A real-time messaging application with instant text and image communication, built with React, Tailwind CSS, Socket.IO, Node.js, MongoDB, and Cloudinary.",
        stack: ["React", "Node.js", "Socket.IO", "MongoDB"],
        sourceCode: "https://github.com/jithinpulikkal/chap",
        img: chatApp,
        preview: "https://chap.onrender.com/",
    },
];

export default projects;
