import React from 'react';

import Head from '../components/head';
import BigBanner from '../core/BigBanner/BigBanner';
import Wrapper from '../components/Wrapper';
import Releases from '../core/Releases/Releases';
import TwoBigBanner from '../core/TwoBigBanner/TwoBigBanner';
// mock data
import { banner, releases } from '../mock/main';

export default () => (
  <Wrapper>
    <Head title="Home" />
    <BigBanner
      link="/123/"
      theme="white"
      title={banner.title}
      desc={banner.desc}
      img={banner.image}
      imgMobile={banner.imageMobile}
    />
    <Releases data={releases} />
    <BigBanner
      link="/123/"
      theme="black"
      title={banner.title}
      desc={banner.desc}
      img={banner.image}
      imgMobile={banner.imageMobile}
    />
    <TwoBigBanner />
    <BigBanner
      link="/123/"
      theme="white"
      title={banner.title}
      desc={banner.desc}
      img={banner.image}
      imgMobile={banner.imageMobile}
    />
  </Wrapper>
);
