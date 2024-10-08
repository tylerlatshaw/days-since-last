import PolicyIcon from "@mui/icons-material/Policy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LoginIcon from "@mui/icons-material/Login";

import type {
    FooterLinkType,
    NavigationLinkType
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

export const signedInLinks: NavigationLinkType[] = [
    {
        display: "Tasks",
        link: "/tasks",
        icon: DashboardIcon
    },
    {
        display: "Add Task",
        link: "/add-task",
        icon: AddBoxIcon
    },
    {
        display: "Edit Tasks",
        link: "/edit-tasks",
        icon: EditNoteIcon
    },
    {
        display: "User Profile",
        link: "/user-profile",
        icon: AccountBoxIcon
    },
];

export const signedOutLinks: NavigationLinkType[] = [
    {
        display: "Sign Up",
        link: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL!,
        icon: PersonAddAltIcon
    },
    {
        display: "Sign In",
        link: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!,
        icon: LoginIcon
    }
];