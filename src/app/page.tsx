import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Home() {
  return (
    <div className="bg-white relative min-h-screen w-full overflow-hidden">
      <BackgroundRippleEffect cols={29}/>

      <div className=" flex flex-col justify-center items-center gap-10 absolute top-80 left-1/2 -translate-1/2 text-center w-full mb-4">
      <div className="relative w-full h-[700px] flex justify-center items-center">
        
        <Image src="/logo.svg" alt="logo" width={500} height={500} />
      </div>
      </div>
      <div className="absolute bottom-5 mx-auto left-1/2 bg-black text-white -translate-x-1/2 shadow-md focus:shadow-lg w-full max-w-3xl rounded-2xl border-2 border-gray-500 pb- ">
        <form className="flex flex-col ">
        <Textarea placeholder="Start typing dawg...."
        className="flex-1 resize-none bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 max-h-[144px] overflow-y-auto custom-scrollbar"
        rows={1}/>
        <div className="w-full  flex justify-end">
          <Button type="submit" size="icon" className="bg-black border-3 border-black rounded-xl overflow-hidden ">
        <Image
        src="/compo.svg"
        alt="Up Button"
        width={25}
        height={25}
        />
      </Button>      
        </div>
      </form>
      </div>
    </div>
  );
}


