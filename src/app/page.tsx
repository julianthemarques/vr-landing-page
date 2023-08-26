import cinematicImg from '@/assets/img/cinematicVirtualReality.png';
import ellipseLeft from '@/assets/img/ellipseLeft.png';
import ellipseRight from '@/assets/img/ellipseRight.png';
import ellipseTop from '@/assets/img/ellipseTop.png';
import peopleOnline from '@/assets/img/peopleOnline.png';
import { Button } from '@/components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex">
      <div className="leftContainer">
        <div className="text-3xl">
          Let's Explore <br /> Three-Dimensional <br /> visual
        </div>
        <div className="text-xs">
          With virtual technology you can see the digital world <br />
          feel more real and you can play the game with a new <br /> style.
        </div>
        <div className="flex">
          <Button>Get it Now</Button>
          <p className="text-xs">Explore Device</p>
        </div>
        <div className="flex">
          <Image src={peopleOnline} alt="" />
          <span className="rounded-full h-1"></span>
        </div>
      </div>
      <div className="rightContainer">
        <Image src={cinematicImg} alt="" />
      </div>

      <Image src={ellipseLeft} alt="" className="-z-10 absolute left-0 top-60" />
      <Image src={ellipseTop} alt="" className="-z-10 absolute left-60 top-0" />
      <Image src={ellipseRight} alt="" className="-z-10 absolute right-0 top-60" />
    </div>
  );
}
