import PolicyIcon from "@mui/icons-material/Policy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

import type {
    FooterLinkType,
} from "./type-library";

export const footerLinks: FooterLinkType[] = [
    {
        display: "Privacy Policy",
        link: "/privacy-policy",
        icon: PolicyIcon
    },
    {
        display: "tyler@tylerlatshaw.com",
        link: "mailto:tyler@tylerlatshaw.com",
        icon: MailOutlineIcon
    },
    {
        display: "Connect With Me On LinkedIn",
        link: "https://www.linkedin.com/in/tylerlatshaw/",
        icon: LinkedInIcon
    },
    {
        display: "Find My Code on GitHub",
        link: "https://github.com/tylerlatshaw",
        icon: GitHubIcon
    }
];