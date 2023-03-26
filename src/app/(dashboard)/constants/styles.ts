export const DASHBOARD_LAYOUT = {
  nav: "fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full",
  sidebar: "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white",
  children: "m-2 md:m-10 mt-20 p-2 md:p-5 bg-white rounded-3xl",
};

export const TEXT = {
  title: "text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase",
  title_dash: "text-gray-600 font-bold uppercase",
  title_greet: "text-xl font-bolder",
  title_base: "text-slate-500 text-xs",
};

export const getDashboardWidth = (menu: boolean): string => {
  return menu ? "min-h-screen md:ml-72 w-full" : "w-full min-h-screen flex-2";
};
