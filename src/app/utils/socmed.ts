import { IconType } from "react-icons"
import { FaGithub, FaLinkedin, FaFacebook, FaDiscord, FaInstagram } from "react-icons/fa"

export type SocMed = {
  name: string
  logo: IconType
  href?: string
  username?: string
  hoverColor: string
}

export const socialMedia: SocMed[] = [
  {
    name: "LinkedIn",
    logo: FaLinkedin,
    href: "https://www.linkedin.com/in/josh-eugenio-43148332b/",
    hoverColor: "hover:text-[#0077b5]"
  },
  {
    name: "GitHub", 
    logo: FaGithub,
    href: "https://github.com/Rikuron",
    hoverColor: "hover:text-white"
  },
  {
    name: "Facebook",
    logo: FaFacebook,
    href: "https://www.facebook.com/crislanejosh.eugenio", 
    hoverColor: "hover:text-[#1877f2]"
  },
  {
    name: "Discord",
    logo: FaDiscord,
    username: "rikur0n",
    hoverColor: "hover:text-[#5865F2]"
  },
  {
    name: "Instagram",
    logo: FaInstagram,
    href: "https://www.instagram.com/sh00.py/",
    hoverColor: "hover:text-[#E1306C]"
  }
]