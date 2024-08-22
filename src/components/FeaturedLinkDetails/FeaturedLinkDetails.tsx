import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "../Typography";

type DetailRowProps = {
  label:string;
  value:string;
}

const DetailRow = ({label, value}:DetailRowProps) => {

  return (
    <Stack direction={{ xs: "column", md: "row" }} alignItems={{sm:"flex-start", "md": "center"}} sx={{ marginBottom: "8px"}}>
      <Typography variant="h6" weight="semibold" sx={{
        minWidth: "140px",
        maxWidth: "140px",
        }}>{label}</Typography>
      <Typography variant="body4" weight="regular">{value ? value : "-"}</Typography>
    </Stack>
  );

};

export enum FeaturedLinkVariant {
  INSTRUMENT = 'instrument',
  INVESTIGATION = 'investigation',
}

type FeaturedLinkDetailsBaseProps = {
  tags?:Array<string>;
};

export type FeaturedLinkInstrumentDetailsProps = FeaturedLinkDetailsBaseProps & {
  instrumentType:Array<string>;
  investigationTitle:string;
  lid:string;
  startDate:string;
  stopDate:string;
  variant:FeaturedLinkVariant.INSTRUMENT;
}

export type FeaturedLinkInvestigationDetailsProps = FeaturedLinkDetailsBaseProps & {
  lid:string;
  instrumentHostTitles:Array<string>;
  startDate:string;
  stopDate:string;
  variant:FeaturedLinkVariant.INVESTIGATION;
}

export type FeaturedLinkDetailsProps = FeaturedLinkInstrumentDetailsProps 
                                        | FeaturedLinkInvestigationDetailsProps;

export const FeaturedLinkDetails = (props:FeaturedLinkDetailsProps) => {

  return (
    <Box sx={{
      backgroundColor: "#F6F6F6",
      padding: { sm: "20px 20px 20px 20px", md: "20px 20px 20px 80px" },
    }}>
      <Stack spacing={"5px"}>
        { 
          props.variant === FeaturedLinkVariant.INSTRUMENT && <>
            <DetailRow label={"Investigation"} value={props.investigationTitle} />
            <DetailRow label={"Identifier"} value={props.lid} />
            <DetailRow label={"Instrument Type"} value={props.instrumentType.join(",")} />
            <DetailRow label={"Start Date"} value={props.startDate} />
            <DetailRow label={"Stop Date"} value={props.stopDate} />
          </>
        }
        {
          props.variant === FeaturedLinkVariant.INVESTIGATION && <>
            <DetailRow label={"Identifier"} value={props.lid} />
            <DetailRow label={"Start Date"} value={props.startDate} />
            <DetailRow label={"Stop Date"} value={props.stopDate} />
            <DetailRow label={"Instrument Hosts"} value={props.instrumentHostTitles.join(", ")} />
          </>
        }
      </Stack>
    </Box>
  )

};


