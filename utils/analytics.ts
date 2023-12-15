import ReactGA from "react-ga";

export const initializeGA = (trackingID: string) => {
  ReactGA.initialize(trackingID);
};

export const logPageView = (pathname: string) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
};
