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

export type FeaturedLinkDataBundleDetailsProps = FeaturedLinkDetailsBaseProps & {
  doi:string;
  investigation:string;
  instrumentType:Array<string>;
  lid:string;
  processingLevel:string;
  startDate:string;
  stopDate:string;
  variant:FeaturedLinkDetailsVariant.DATA_BUNDLE;
}

export type FeaturedLinkDataCollectionDetailsProps = FeaturedLinkDetailsBaseProps & {
  disciplineName:string;
  doi:string;
  investigation:string;
  processingLevel:string;
  lid:string;
  startDate:string;
  stopDate:string;
  variant:FeaturedLinkDetailsVariant.DATA_COLLECTION;
}

export type FeaturedLinkDataSetDetailsProps = FeaturedLinkDetailsBaseProps & {
  disciplineName:string;
  doi:string;
  investigation:string;
  processingLevel:string;
  target:string;
  variant:FeaturedLinkDetailsVariant.DATA_SET;
}

export type FeaturedLinkInstrumentDetailsProps = FeaturedLinkDetailsBaseProps & {
  instrumentType:Array<string>;
  investigation:string;
  lid:string;
  startDate:string;
  stopDate:string;
  variant:FeaturedLinkDetailsVariant.INSTRUMENT;
}

export type FeaturedLinkInvestigationDetailsProps = FeaturedLinkDetailsBaseProps & {
  instrumentHostTitles:Array<string>;
  lid:string;
  startDate:string;
  stopDate:string;
  variant:FeaturedLinkDetailsVariant.INVESTIGATION;
}

export type FeaturedLinkTargetDetailsProps = FeaturedLinkDetailsBaseProps & {
  lid:string;
  targetType:Array<string>;
  variant:FeaturedLinkDetailsVariant.TARGET;
}

export type FeaturedLinkToolDetailsProps = FeaturedLinkDetailsBaseProps & {
  categories:Array<string>;
  support:string;
  url:string;
  variant:FeaturedLinkDetailsVariant.TOOL;
  version:string;
}

export type FeaturedLinkDetailsProps = (
  FeaturedLinkDataBundleDetailsProps 
  | FeaturedLinkDataCollectionDetailsProps
  | FeaturedLinkDataSetDetailsProps
  | FeaturedLinkInstrumentDetailsProps 
  | FeaturedLinkInvestigationDetailsProps
  | FeaturedLinkTargetDetailsProps
  | FeaturedLinkToolDetailsProps
);

export const FeaturedLinkDetails = (props:FeaturedLinkDetailsProps) => {

  return (
    <Box sx={{
      backgroundColor: "#F6F6F6",
      padding: { sm: "20px 20px 20px 20px", md: "20px 20px 20px 80px" },
    }}>
      <Stack spacing={"5px"}>
        {
          props.variant === FeaturedLinkDetailsVariant.DATA_BUNDLE && <>
            <DetailRow label={"Investigation"} value={props.investigation} />
            <DetailRow label={"Identifier"} value={props.lid} />
            <DetailRow label={"Instrument Type"} value={props.instrumentType.join(",")} />
            <DetailRow label={"DOI"} value={props.doi} />
            <DetailRow label={"Processing Level"} value={props.processingLevel} />
            <DetailRow label={"Start Date"} value={props.startDate} />
            <DetailRow label={"Stop Date"} value={props.stopDate} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.DATA_COLLECTION && <>
            <DetailRow label={"Investigation"} value={props.investigation} />
            <DetailRow label={"Identifier"} value={props.lid} />
            <DetailRow label={"Discipline Name"} value={props.disciplineName} />
            <DetailRow label={"DOI"} value={props.doi} />
            <DetailRow label={"Processing Level"} value={props.processingLevel} />
            <DetailRow label={"Start Date"} value={props.startDate} />
            <DetailRow label={"Stop Date"} value={props.stopDate} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.DATA_SET && <>
            <DetailRow label={"Investigation"} value={props.investigation} />
            <DetailRow label={"Discipline Name"} value={props.disciplineName} />
            <DetailRow label={"DOI"} value={props.doi} />
            <DetailRow label={"Processing Level"} value={props.processingLevel} />
            <DetailRow label={"Target"} value={props.target} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.INSTRUMENT && <>
            <DetailRow label={"Investigation"} value={props.investigation} />
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
        {
          props.variant === FeaturedLinkDetailsVariant.TOOL && <>
            <DetailRow label={"URL"} value={props.url} />
            <DetailRow label={"Support"} value={props.support} />
            <DetailRow label={"Version"} value={props.version} />
            <DetailRow label={"Category"} value={props.categories.join(",")} />
          </>
        }
        <DetailRow value={props.tags} variant={DetailRowVariant.TAGS}/>
      </Stack>
    </Box>
  )

};