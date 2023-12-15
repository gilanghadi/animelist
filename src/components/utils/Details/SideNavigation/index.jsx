/* eslint-disable react/prop-types */
import AlternativeTitle from "./AlternativeTitle";
import Information from "./Information";
import Resource from "./Resource";
import Statistics from "./Statistik";
import StreamingPlatform from "./StreamingPlatform";

const SideNavigation = ({ api }) => {
  return (
    <div className="md:col-span-1">
      <img
        src={api?.images?.jpg?.large_image_url}
        alt={api?.images?.jpg?.large_image_url}
        className="rounded-md object-cover w-full max-h-64"
      />
      <AlternativeTitle api={api} />
      <Information api={api} />
      <Statistics api={api} />
      {api?.external?.length > 0 && <Resource api={api} />}
      {api?.streaming?.length > 0 && <StreamingPlatform api={api} />}
    </div>
  );
};

export default SideNavigation;
