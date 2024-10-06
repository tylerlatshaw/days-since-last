import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type FooterLinkType = {
    display: string,
    link: string,
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export type NavigationLinkType = {
    display: string,
    link: string
}

export type TaskType = {
    UserId?: string,
    TaskId: string,
    DisplayName: string,
    LastDate: string,
    Threshold1: number,
    Threshold2: number
}