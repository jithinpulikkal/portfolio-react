import chatApp from "../assets/Lets chat.jpeg";
import alikStore from "../assets/alikstore.png";

const projects = [
    {
        name: "Alik Store Mobile App",
        description:
            "A shopping app for discovering products across categories, saving favorites, tracking orders, and completing purchases with a smoother mobile-first experience.",
        stack: ["Android", "Mobile App", "Ecommerce"],
        sourceCode: "",
        img: alikStore,
        preview: "https://play.google.com/store/apps/details?id=com.alikstore.shopping&hl=en_IN",
        previewLabel: "View app",
    },
    {
        name: "Alik Store Web",
        description:
            "An ecommerce storefront for browsing accessories and branded devices with a category-led shopping flow, promotional offers, and a cleaner online buying experience.",
        stack: ["React", "Ecommerce", "Responsive UI"],
        sourceCode: "",
        img: alikStore,
        preview: "https://alik.store/",
        previewLabel: "Visit website",
    },

    {
        name: "Let's Chat",
        description:
            "Developed a real-time messaging application with instant text and image communication. Full-stack implementation using React, Tailwind CSS, Socket.IO, Node.js, MongoDB, and Cloudinary. Deployed on Onrender.",
        stack: ["ReactJS", "NodeJS", "Express", "MongoDB"],
        sourceCode: "https://github.com/jithinpulikkal/chap",
        img: chatApp,
        preview: "https://chap.onrender.com/",
    },
    {
        name: "Coza Store",
        description:
            "an innovative online fashion destination. Built on a foundation of Node.js, Express.js, and MongoDB, this platform combines cutting-edge technology with top-notch style.",
        stack: ["NodeJS", "Express", "MongoDB"],
        sourceCode: "https://github.com/jithinpulikkal/Coza",
        img: "https://shopcoza.com/cdn/shop/files/orange_square.png?v=1658871095&width=1500",
        preview: "https://coza-xi.vercel.app/",
    },

    {
        name: "To-Do App ",
        description:
            "A simple To-Do app that can record the tasks along with the date and time of creation and is listed separately as pending and completed and also lists the deleted tasks",
        stack: ["React", "NodeJS", "Express", "MongoDB"],
        sourceCode: "https://github.com/jithinpulikkal/todo",
        img: "https://logopond.com/logos/f05276685dd792ea181ae2b2231dd0ef.png",
        preview: "https://todo-tawny-alpha.vercel.app/",
    },
];

//projects end
export default projects;
