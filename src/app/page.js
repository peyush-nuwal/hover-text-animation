import Image from "next/image";

export default function Home() {
  const text ="Smoothhhh transitionsss make it feeeeel real."
  const text2 = "Vibessssssss you can almost feeeeeeeel."
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-indigo-300 font-thin text-center text-6xl cursor-pointer">
        {text.split("").map((ch, idx) => (
          <span key={idx} className=" hover-text " >{ch}</span>
        ))}
      </h2>
      <h2 className="text-indigo-300 font-thin text-center text-6xl cursor-pointer">
        {text2.split("").map((ch, idx) => (
          <span key={idx} className=" hover-text " >{ch}</span>
        ))}
      </h2>
 </div>
  );
}
