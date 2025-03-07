// import { useEffect, useState } from "react";

// export const BackgroundColorHandler = () => {
//   const [bgColor, setBgColor] = useState("bg-black");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");
//     const options = { threshold: 0.5 };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           switch (entry.target.id) {
//             case "home":
//               setBgColor("bg-black");
//               break;
//             case "about":
//               setBgColor("bg-red-900");
//               break;
//             case "projects":
//               setBgColor("bg-gray-800");
//               break;
//             case "contact":
//               setBgColor("bg-gray-700");
//               break;
//             default:
//               setBgColor("bg-black");
//           }
//         }
//       });
//     }, options);

//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   return bgColor;
// };