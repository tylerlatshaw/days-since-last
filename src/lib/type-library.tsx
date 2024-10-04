import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type FooterLinkType = {
    display: string,
    link: string,
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export type TaskType = {
    TaskId: string,
    DisplayName: string,
    LastDate: Date,
    Threshold1: number,
    Threshold2: number
}