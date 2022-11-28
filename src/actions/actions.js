import ReactGA from "react-ga";

const defaultActions = (args, action) => {
  args.event.preventDefault();
  ReactGA.event({
    category: args.value,
    action: action,
    label: "3",
  });
  window.open(args.value);
};

const actions = {
  instagram: (args) => {
    defaultActions(args, "link instagram")
  },
  phone: (args) => {
    defaultActions(args, "link phone-call")
  },
  whatsapp: (args) => {
    defaultActions(args, "link whatsapp")
  }
};

const dispatchLink = (action, { event, value, payload }) => {
  actions[action]({ event, value, payload });
};

export default dispatchLink;
