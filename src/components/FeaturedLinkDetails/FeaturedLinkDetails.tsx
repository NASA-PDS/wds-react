import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "../Typography";
import { Tag } from "../Tag";

enum DetailRowVariant {
  STRING = "string",
  TAGS = "tags",
}

type DetailRowBaseProps = {
  label?:string;
};

type DetailRowStringProps = DetailRowBaseProps & {
  label:string;
  value:string;
  variant?:DetailRowVariant.STRING;
}

type DetailRowTagProps = DetailRowBaseProps & {
  value:Array<string>;
  variant?:DetailRowVariant.TAGS;
}

type DetailRowProps = DetailRowStringProps | DetailRowTagProps;

const DetailRow = (props:DetailRowProps) => {

  return (
    <>
      {
        props.variant === undefined &&
          <Stack direction={{ xs: "column", md: "row" }} alignItems={{sm:"flex-start", "md": "center"}} sx={{
            marginBottom: "8px"}}
          >
            <Typography variant="h6" weight="semibold" sx={{ minWidth: "140px", maxWidth: "140px", marginBottom: {xs: "4px", md: "inherit"}}}>{props.label}</Typography>
            <Typography variant="body4" weight="regular">{props.value ? props.value : "-"}</Typography>
          </Stack>
      }
      {
        props.variant === DetailRowVariant.TAGS && <>
            <Stack direction={{ xs: "column", md: "row" }} alignItems={{sm:"flex-start", "md": "center"}} sx={{
            marginBottom: "8px"}}>
              <Typography variant="h6" weight="semibold" sx={{ minWidth: "140px", maxWidth: "140px", marginBottom: {xs: "4px", md: "inherit"}}}>{ props.label ? props.label : "Tags"}</Typography>
              <Stack direction={"row"} spacing={1} useFlexGap flexWrap="wrap">
                {
                  props.value.length > 0 && props.value.map( (tag, index) => {
                    return <Tag label={tag} key={index}></Tag>
                  })
                }
              </Stack>
            </Stack>
          </>
      }
    </>
  );

};

export enum FeaturedLinkDetailsVariant {
  DATA_BUNDLE = "data-bundle",
  DATA_COLLECTION = "data-collection",
  DATA_SET = "data-set",
  INSTRUMENT = "instrument",
  INVESTIGATION = "investigation",
  RESOURCE = "resoruce",
  TARGET = "target",
  TOOL = "tool",
}

type FeaturedLinkDetailsBaseProps = {
  tags:Array<string>;
};

export type FeaturedLinkInstrumentDetailsProps = FeaturedLinkDetailsBaseProps & {
  instrumentType:Array<string>;
  investigationTitle:string;
  lid:string;
  startDate:string;
  stopDate:string;
  variant:FeaturedLinkDetailsVariant.INSTRUMENT;
}

export type FeaturedLinkInvestigationDetailsProps = FeaturedLinkDetailsBaseProps & {
  lid:string;
  instrumentHostTitles:Array<string>;
  startDate:string;
  stopDate:string;
  variant:FeaturedLinkDetailsVariant.INVESTIGATION;
}

export type FeaturedLinkTargetDetailsProps = FeaturedLinkDetailsBaseProps & {
  lid:string;
  targetType:Array<string>;
  variant:FeaturedLinkDetailsVariant.TARGET;
}

export type FeaturedLinkDetailsProps = (
  FeaturedLinkInstrumentDetailsProps 
  | FeaturedLinkInvestigationDetailsProps
  | FeaturedLinkTargetDetailsProps
);

export const FeaturedLinkDetails = (props:FeaturedLinkDetailsProps) => {

  return (
    <Box sx={{
      backgroundColor: "#F6F6F6",
      padding: { sm: "20px 20px 20px 20px", md: "20px 20px 20px 80px" },
    }}>
      <Stack spacing={"5px"}>
        { 
          props.variant === FeaturedLinkDetailsVariant.INSTRUMENT && <>
            <DetailRow label={"Investigation"} value={props.investigationTitle} />
            <DetailRow label={"Identifier"} value={props.lid} />
            <DetailRow label={"Instrument Type"} value={props.instrumentType.join(",")} />
            <DetailRow label={"Start Date"} value={props.startDate} />
            <DetailRow label={"Stop Date"} value={props.stopDate} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.INVESTIGATION && <>
            <DetailRow label={"Identifier"} value={props.lid} />
            <DetailRow label={"Start Date"} value={props.startDate} />
            <DetailRow label={"Stop Date"} value={props.stopDate} />
            <DetailRow label={"Instrument Hosts"} value={props.instrumentHostTitles.join(", ")} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.TARGET && <>
            <DetailRow label={"Identifier"} value={props.lid} />
            <DetailRow label={"Type"} value={props.targetType} />
          </>
        }
        <DetailRow value={props.tags} variant={DetailRowVariant.TAGS}/>
      </Stack>
    </Box>
  )

};


