import Card from "./card";
import Gallery from "./gallery";
import Nav from "./nav";
import Rectangle from "../../public/images/Rectangle.png";
import Image from "next/image";
export default function Home() {

  return (
    <div className="flex min-h-screen md:items-start md:justify-items-start items-center justify-center bg-zinc-50 font-sans dark:bg-[#28292F] flex-col md:flex-row px-6 py-8">
        <div className="mt-8 text-center  w-5/6 md:w-3/6" id="left">
          
        </div>
        <div className="mt-8 text-center  w-5/6 md:w-3/6 md:max-w-[720px]" id="right">
          <Card>
                <Nav />
                <div className="w-4/5 m-auto left-0 text-gray-400 mt-2 text-md text-left">
                  <p>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                    <br></br>
                    <br></br>
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                  </p>
                </div>
                <Image src={Rectangle} alt="Rectangle" className="w-3 h-16 mb-4 absolute top-[30%] right-0"/>
          </Card>

             
          <Card>
              <Gallery />
          </Card>
        </div>
      
    </div>
  );
}
