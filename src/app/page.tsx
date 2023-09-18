import cinematicImg from '@/assets/img/cinematicVirtualReality.png';
import ellipseLeft from '@/assets/img/ellipseLeft.png';
import ellipseRight from '@/assets/img/ellipseRight.png';
import ellipseTop from '@/assets/img/ellipseTop.png';
import peopleOnline from '@/assets/img/peopleOnline.png';
import virtualGlasses from '@/assets/img/virtualGlasses.png';
import virtualHands from '@/assets/img/vrUsingHands.png';
import { Button } from '@/components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-[854px] mx-auto justify-center">
      <div className="flex">
        <div>
          <div className="text-5xl mb-8">
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

        <div className="">
          <Image src={cinematicImg} alt="" />
        </div>
      </div>
      <div className="flex">
        <div className="flex">
          <Image src={virtualGlasses} alt="" />
          <Image src={virtualHands} alt="" />
        </div>
        <div>
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
        </div>
      </div>
      <Image src={ellipseLeft} alt="" className="-z-10 absolute left-0 top-60" />
      <Image src={ellipseTop} alt="" className="-z-10 absolute left-60 top-0" />
      <Image src={ellipseRight} alt="" className="-z-10 absolute right-0 top-60" />
    </div>
  );
}
