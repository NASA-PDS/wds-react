import { IconButton as MuiIconButton, Stack as MuiStack } from '@mui/material';
import { Typography } from 'components/Typography';
import { IconArrowDiagonal, IconArrowRight } from 'components/Icons';

import "./PrimaryButton.scss"


export type PrimaryButtonProps = {
  iconType?: "internal" | "external"
  label: string;
  size?: "14" | "16" | "18" | "22" | "29" | "36";
}

export const PrimaryButton = ({
  iconType = "internal",
  label,
  size = "16"
}:PrimaryButtonProps) => {

  switch(size) {

    case "14":

      return <>
        <MuiStack direction={"row"} justifyContent={"left"} alignItems={"center"} spacing={"4px"}>
          <Typography variant={"h6"} weight={"semibold"}>{label}</Typography>
          <MuiIconButton aria-label="arrow" className={"pds-wds-primary-button pds-wds-primary-button-size-14"}>
            { iconType === "internal" ? <IconArrowRight/> : <IconArrowDiagonal /> }
          </MuiIconButton>
        </MuiStack>
      </>

    default:
    case "16":

      return <>
          <MuiStack direction={"row"} justifyContent={"left"} alignItems={"center"} spacing={"4px"}>
            <Typography variant={"h5"} weight={"semibold"} component={"span"}>{label}</Typography>
            <MuiIconButton aria-label="arrow" className={"pds-wds-primary-button pds-wds-primary-button-size-16"}>
              { iconType === "internal" ? <IconArrowRight/> : <IconArrowDiagonal /> }
            </MuiIconButton>
          </MuiStack>
        </>

    case "18":

      return <>
          <MuiStack direction={"row"} justifyContent={"left"} alignItems={"center"} spacing={"4px"}>
            <Typography variant={"h4"} weight={"semibold"} component={"span"}>{label}</Typography>
            <MuiIconButton aria-label="arrow" className={"pds-wds-primary-button pds-wds-primary-button-size-18"}>
              { iconType === "internal" ? <IconArrowRight/> : <IconArrowDiagonal /> }
            </MuiIconButton>
          </MuiStack>
        </>

    case "22":

      return <>
          <MuiStack direction={"row"} justifyContent={"left"} alignItems={"center"} spacing={"8px"}>
            <Typography variant={"h3"} weight={"bold"} component={"span"}>{label}</Typography>
            <MuiIconButton aria-label="arrow" className={"pds-wds-primary-button pds-wds-primary-button-size-22"}>
              { iconType === "internal" ? <IconArrowRight/> : <IconArrowDiagonal /> }
            </MuiIconButton>
          </MuiStack>
        </>

    case "29":

      return <>
          <MuiStack direction={"row"} justifyContent={"left"} alignItems={"center"} spacing={"8px"}>
            <Typography variant={"h2"} weight={"bold"} component={"span"}>{label}</Typography>
            <MuiIconButton aria-label="arrow" className={"pds-wds-primary-button pds-wds-primary-button-size-29"}>
              { iconType === "internal" ? <IconArrowRight/> : <IconArrowDiagonal /> }
            </MuiIconButton>
          </MuiStack>
        </>

    case "36":

      return <>
          <MuiStack direction={"row"} justifyContent={"left"} alignItems={"center"} spacing={"8px"}>
            <Typography variant={"h1"} weight={"bold"} component={"span"}>{label}</Typography>
            <MuiIconButton aria-label="arrow" className={"pds-wds-primary-button pds-wds-primary-button-size-36"}>
              { iconType === "internal" ? <IconArrowRight/> : <IconArrowDiagonal /> }
            </MuiIconButton>
          </MuiStack>
        </>

  }

}

export default PrimaryButton