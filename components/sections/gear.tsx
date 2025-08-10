import { PiMonitorFill } from 'react-icons/pi';
import { SiApple } from 'react-icons/si';
import { FaHeadphones, FaPlaystation } from 'react-icons/fa6';
import { BsEarbuds } from 'react-icons/bs';
import { IoWatch } from 'react-icons/io5';

export default function Gear() {
  return (
    <div className="w-full flex flex-col gap-4 border border-dashed border-t-0 p-5 font-inter">
      <div className=" text-sm font-sans font-medium tracking-wider">
        Gear / Setup
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-medium">
        <div className="flex flex-row gap-2 items-center">
          <SiApple size={18} />
          <div> Macbook M3 Pro</div>
          <div className="text-muted-foreground"> (Office)</div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <SiApple size={18} />
          <div> Macbook M2 Air</div>
          <div className="text-muted-foreground"> (Personal)</div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <SiApple size={18} />
          <div> iPhone 15</div>
          <div className="text-muted-foreground"></div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <PiMonitorFill size={18} />
          <div> MSI G274QPF E2</div>
          <div className="text-muted-foreground"></div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaPlaystation size={18} />
          <div> Playstation 5</div>
          <div className="text-muted-foreground"></div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaHeadphones size={18} />
          <div> Sony WH-CN720N</div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <BsEarbuds size={18} />
          <div> Oneplus Buds 3</div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <IoWatch size={18} />
          <div> CMF Watch Pro</div>
        </div>
      </div>
    </div>
  );
}
