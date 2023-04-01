import React from "react";

import GooglePlayIcon from "@/assets/google-play.svg";
import AppStore from "@/assets/apple-dark.svg";
import AppStoreLight from "@/assets/apple-light.svg";
import { MobileAppButtonProps } from "./MobileAppButton";
import MobileAppButton from "./MobileAppButton";
import { useTheme } from "next-themes";

const MobileButton = () => {
  const { theme } = useTheme();
  const themeClass = theme == "dark" ? "dark" : "light";
  const APKUrl = "#";
  const iOSUrl = "#";

  return (
    <div className='flex flex-wrap justify-center items-center gap-5'>
      <GooglePlayButton url={APKUrl} title='GET IT ON' theme={themeClass} />
      <AppStoreButton url={iOSUrl} title='Download on the' theme={themeClass} />
    </div>
  );
};

const GooglePlayButton = ({ theme, height, width, url, title }: MobileAppButtonProps) => {
  return (
    <MobileAppButton height={height} width={width} name={"Google Play"} theme={theme} title={title} logo={GooglePlayIcon} url={url} />
  );
};

const AppStoreButton = ({ theme, height, width, url, title }: MobileAppButtonProps) => {
  return (
    <MobileAppButton
      height={height}
      width={width}
      name={"App Store"}
      theme={theme}
      title={title}
      logo={theme === "dark" ? AppStore  : AppStoreLight}
      url={url}
    />
  );
};

export default MobileButton;
