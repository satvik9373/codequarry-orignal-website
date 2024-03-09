import GlobalApi from "../../../_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SideBanners() {
  const [sideBannerList, setSideBannerList] = useState();
  useEffect(() => {
    GetSideBanner();
  }, []);
  const GetSideBanner = () => {
    GlobalApi.GetSideBanner().then((resp) => {
      // console.log(resp);
      setSideBannerList(resp.sideBanners);
    });
  };
  console.log(sideBannerList);
  return (
    <div>
      {sideBannerList?.map((item, index) => (
        <div key={index}>
          <Image
            src={item.banner.url}
            alt="banner"
            width={500}
            height={300}
            onClick={() => window.open(item?.url)}
            className="rounded-xl cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

export default SideBanners;
