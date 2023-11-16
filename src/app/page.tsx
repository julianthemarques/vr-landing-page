import cinematicImg from '@/assets/img/cinematicVirtualReality.png';
import ellipseLeft from '@/assets/img/ellipseLeft.png';
import ellipseRight from '@/assets/img/ellipseRight.png';
import ellipseTop from '@/assets/img/ellipseTop.png';
import mixedReality1 from '@/assets/img/mixedReality1.png';
import mixedReality2 from '@/assets/img/mixedReality2.png';
import mixedReality3 from '@/assets/img/mixedReality3.png';
import mixedReality4 from '@/assets/img/mixedReality4.png';
import peopleOnline from '@/assets/img/peopleOnline.png';
import virtualGlasses from '@/assets/img/virtualGlasses.png';
import vrBannerExp from '@/assets/img/vrBannerExp.png';
import virtualHands from '@/assets/img/vrUsingHands.png';
import { Button } from '@/components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex justify-between max-w-[850px] mx-auto">
        <div className="w-full">
          <div className="text-4xl mb-8">
            Let's Explore <br /> Three-Dimensional <br /> visual
          </div>
          <div className="text-sm mb-8">
            With virtual technology you can see the digital world <br />
            feel more real and you can play the game with a new <br /> style.
          </div>
          <div className="flex mb-8">
            <Button>Get it Now</Button>
            <p className="text-sm ml-8 flex items-center">Explore Device</p>
          </div>
          <div className="flex mb-8">
            <Image src={peopleOnline} alt="" />
            <span className="flex items-center rounded-full h-2 w-2 ml-4 mr-4 mt-2 bg-white"></span>
            <p>400k people online</p>
          </div>
        </div>
          <Image className='h-auto w-full' src={cinematicImg} alt="" />
      </div>
      <div className="flex justify-between max-w-[850px] mx-auto">
        <div className="flex">
          <Image src={virtualGlasses} alt="" className="absolute left-[26%] top-[68%]" />
          <Image src={virtualHands} alt="" className="absolute left-[40%] top-[80%]" />
        </div>
        <div className="mt-24">
          <div className="text-4xl">
            New Experience In <br /> Playing Game
          </div>
          <div className="mb-8 ">
            You can try playing the game with a <br />
            new style and of course a more real <br />
            feel, like you are the main character <br />
            in your game and adventure in this <br />
            new digital world.
          </div>
          <Button>Get it Now</Button>
        </div>
      </div>
      <div className="max-w-[850px] mx-auto">
        <Image src={vrBannerExp} alt="" className="mt-16"></Image>
        <div className="text-4xl mt-10">Mixed Reality Headsets</div>
        <div className="RealityHeadsetContainer flex">
          <Image src={mixedReality1} alt="" className=""></Image>
          <Image src={mixedReality2} alt="" className=""></Image>
          <Image src={mixedReality3} alt="" className=""></Image>
          <Image src={mixedReality4} alt="" className=""></Image>
        </div>
      </div>
      <Image src={ellipseLeft} alt="" className="-z-10 absolute left-0 top-60" />
      <Image src={ellipseTop} alt="" className="-z-10 absolute left-60 top-0" />
      <Image src={ellipseRight} alt="" className="-z-10 absolute right-0 top-60" />
    </>
  );
}
