import { LightSvg } from '@/assets/svg/light-logo';
import { Button } from './Button';

export const Header = () => {
  return (
    <header className="flex justify-between mb-20 max-w-[950px] mx-auto">
      <div className="left-container">
        <LightSvg />
      </div>
      <div className="right-container flex">
        <nav className="flex justify-center">
          <ul className="flex justify-center items-center">
            <li className="liEffects hover:scale-110 transition ease-in-out delay-170  mr-5">
              Home
            </li>
            <li className="liEffects hover:scale-110 transition ease-in-out delay-170  mr-5">
              Company
            </li>
            <li className="liEffects hover:scale-110 transition ease-in-out delay-170  mr-10">
              Features
            </li>
          </ul>
        </nav>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};
