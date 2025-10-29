import React from 'react'

const NewsCardtext = () => {
  return (
    <div className="max-w-xl bg-white p-4 font-serif space-y-3 drop-shadow-xl cursor-pointer hover:scale-101 ease-in-out duration-300">
      <h1 className="text-[22px] font-bold leading-snug">
        More Airports to Use Greener ‘Glide’ Approach to Landing
      </h1>

      <p className="text-[13px] text-gray-600 flex gap-2">
        <span>By Ginny Dennis</span>
        <span>•</span>
        <span>Feb. 4, 2023</span>
      </p>

      <p className="text-[15px] leading-[1.55] text-[#04594D]">
        Eleven more U.S. airports plan to adopt a new way of landing planes that
        reduces both emissions and noise — all by having incoming planes turn
        off their engines and glide down to the tarmac like a paraglider.
      </p>

      <p className="text-[15px] leading-[1.55] text-[#04594D]">
        The Federal Aviation Administration announced Monday that planes heading
        to Orlando, Fla.; Kansas City, Mo.; Omaha, Neb.; Nebraska’s Offutt Air
        Force Base; Reno, Nev.; and six airports in South Florida soon would
        make idle descents to...
      </p>
    </div>
  );
}

export default NewsCardtext