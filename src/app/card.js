import Frame from "../../public/images/Frame.png";
import Vector from "../../public/images/Vector.png";

import Image from "next/image";
export default function Card({children}) {
  return (
    <>    
        <div className="w-full max-w-[720px] rounded-[18.89px] shadow-[0_4px_3px_rgba(0,0,0,0.5),4px_0_3px_rgba(0,0,0,0.5)]  bg-[#363C43] px-4 py-3">        
            <div className="flex flex-col items-center justify-between relative">
                <Image src={Vector} alt="Vector" className="w-6 h-6 mb-4 absolute top-0 left-0"/>
                {children}
                <Image src={Frame} alt="Frame" className="w-4.5 h-6 mb-4 absolute top-2/4 left-0"/>
                
            </div>
        </div>
        <div className="my-4 w-5/6 md:max-w-[612px] m-auto h-0.5 shadow-[0_4px_3px_rgba(0,0,0,0.8)]  bg-linear-to-r from-[#303439] to-[#303439]  rounded-[2.46px]"></div>
       

    </>
    
  );
}


