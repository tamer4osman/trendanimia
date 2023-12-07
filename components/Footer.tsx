import Image from "next/image";

const socialMediaIcons = [
  { src: "./tiktok.svg", alt: "logo" },
  { src: "./instagram.svg", alt: "logo" },
  { src: "./twitter.svg", alt: "logo" },
];

const Footer = () => (
  <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
    <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>
    <Image
      src="./logo.svg"
      alt="logo"
      width={47}
      height={44}
      className="object-contain"
    />
    <div className="flex items-center gap-6">
      {socialMediaIcons.map((icon, index) => (
        <Image
          key={index}
          {...icon}
          width={19}
          height={19}
          className="object-contain"
        />
      ))}
    </div>
  </footer>
);

export default Footer;
