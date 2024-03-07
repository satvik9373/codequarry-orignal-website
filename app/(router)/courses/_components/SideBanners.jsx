import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanners() {

    const [sideBannerList,setSideBannerList]=useState();
    useEffect(()=>{
        GetSideBanner();
    },[])
    const GetSideBanner=()=>{
        GlobalApi.GetSideBanner().then(resp=>{
            console.log(resp);
            setSideBannerList(resp.SideBanners)
        })
    }
  return (
    <div>
        {sideBannerList?.map((item,index)=>(
            <div key={index}>
              <Image src={item.banner.url} alt='banner'
              width={500}
              height={300}
              />
                </div>
        ))}
    </div>
  )
}

export default SideBanners