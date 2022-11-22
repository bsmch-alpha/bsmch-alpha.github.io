// import { createContext } from "react";
// import ReactGA from "react-ga";

// const AnalyticsContext = createContext({
//   actions: {},
// });

// const AnalyticsProvider = (props) => {
//   const actions = {
//     MODAL_OPENED: (category) => {
//       ReactGA.event({
//         category,
//         action: "modal opened",
//         label: "1",
//       });
//     },
//     MODAL_CLOSED: (category) => {
//       ReactGA.event({
//         category,
//         action: "modal opened",
//         label: "1",
//       });
//     },
//     MODAL_CLOSED: (category) => {
//       ReactGA.event({
//         category,
//         action: "modal opened",
//         label: "1",
//       });
//     },
//   };

//   return (
//     <AnalyticsContext.Provider>{props.children}</AnalyticsContext.Provider>
//   );
// };
