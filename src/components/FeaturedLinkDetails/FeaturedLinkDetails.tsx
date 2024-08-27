import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "../Typography";
import { Tag } from "../Tag";
import { Link } from "react-router-dom";

enum DetailRowVariant {
  STRING = "string",
  TAGS = "tags",
}

type DetailRowBaseProps = {
  label?:string;
};

type DetailRowStringProps = DetailRowBaseProps & {
  label:string;
  link?:string;
  value:string;
  variant?:DetailRowVariant.STRING;
}

type DetailRowTagProps = DetailRowBaseProps & {
  link?:undefined;
  value:Array<string>;
  variant?:DetailRowVariant.TAGS;
}

type DetailRowProps = DetailRowStringProps | DetailRowTagProps;

const DetailRow = (props:DetailRowProps) => {

  let valueElement = <Typography variant="body4" weight="regular">{props.value ? props.value : "-"}</Typography>;
  if( props.link !== undefined ) {
    valueElement = <Link to={props.link}>{valueElement}</Link>;
  }

  return (
    <>
      {
        props.variant === undefined &&
          <Stack direction={{ xs: "column", md: "row" }} alignItems={{sm:"flex-start", "md": "center"}} sx={{
            marginBottom: "8px"}}
          >
            <Typography variant="h6" weight="semibold" sx={{ color: "#000000", minWidth: "140px", maxWidth: "140px", marginBottom: {xs: "4px", md: "inherit"}}}>{props.label}</Typography>
            {valueElement}
          </Stack>
      }
      {
        props.variant === DetailRowVariant.TAGS && <>
            <Stack direction={{ xs: "column", md: "row" }} alignItems={{sm:"flex-start", "md": "center"}} sx={{
            marginBottom: "8px"}}>
              <Box sx={{ minWidth: "140px", maxWidth: "140px", marginBottom: {xs: "4px", md: "inherit"}}}>
                <Typography variant="h6" weight="semibold">{ props.label ? props.label : "Tags"}</Typography>
              </Box>
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

type FeaturedLinkDetailData = {
  link?:string;
  value:string;
}

type FeaturedLinkDetailsBaseProps = {
  tags:Array<string>;
};  

export type FeaturedLinkDataBundleDetailsProps = FeaturedLinkDetailsBaseProps & {
  doi:FeaturedLinkDetailData;
  investigation:FeaturedLinkDetailData;
  instrumentType:Array<string>;
  lid:FeaturedLinkDetailData;
  processingLevel:FeaturedLinkDetailData;
  startDate:FeaturedLinkDetailData;
  stopDate:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.DATA_BUNDLE;
}

export type FeaturedLinkDataCollectionDetailsProps = FeaturedLinkDetailsBaseProps & {
  disciplineName:FeaturedLinkDetailData;
  doi:FeaturedLinkDetailData;
  investigation:FeaturedLinkDetailData;
  processingLevel:FeaturedLinkDetailData;
  lid:FeaturedLinkDetailData;
  startDate:FeaturedLinkDetailData;
  stopDate:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.DATA_COLLECTION;
}

export type FeaturedLinkDataSetDetailsProps = FeaturedLinkDetailsBaseProps & {
  disciplineName:FeaturedLinkDetailData;
  doi:FeaturedLinkDetailData;
  investigation:FeaturedLinkDetailData;
  processingLevel:FeaturedLinkDetailData;
  target:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.DATA_SET;
}

export type FeaturedLinkInstrumentDetailsProps = FeaturedLinkDetailsBaseProps & {
  instrumentType:Array<string>;
  investigation:FeaturedLinkDetailData;
  lid:FeaturedLinkDetailData;
  startDate:FeaturedLinkDetailData;
  stopDate:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.INSTRUMENT;
}

export type FeaturedLinkInvestigationDetailsProps = FeaturedLinkDetailsBaseProps & {
  instrumentHostTitles:Array<string>;
  lid:FeaturedLinkDetailData;
  startDate:FeaturedLinkDetailData;
  stopDate:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.INVESTIGATION;
}

export type FeaturedLinkTargetDetailsProps = FeaturedLinkDetailsBaseProps & {
  lid:FeaturedLinkDetailData;
  targetType:Array<string>;
  variant:FeaturedLinkDetailsVariant.TARGET;
}

export type FeaturedLinkToolDetailsProps = FeaturedLinkDetailsBaseProps & {
  categories:Array<string>;
  support:FeaturedLinkDetailData;
  url:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.TOOL;
  version:FeaturedLinkDetailData;
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
      padding: { xs: "20px 20px 20px 20px", md: "20px 20px 20px 80px" },
    }}>
      <Stack spacing={"5px"}>
        {
          props.variant === FeaturedLinkDetailsVariant.DATA_BUNDLE && <>
            <DetailRow label={"Investigation"} value={props.investigation.value} link={props.investigation.link} />
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Instrument Type"} value={props.instrumentType.join(", ")} />
            <DetailRow label={"DOI"} value={props.doi.value} link={props.doi.link} />
            <DetailRow label={"Processing Level"} value={props.processingLevel.value} link={props.processingLevel.link} />
            <DetailRow label={"Start Date"} value={props.startDate.value} link={props.startDate.link} />
            <DetailRow label={"Stop Date"} value={props.stopDate.value} link={props.stopDate.link} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.DATA_COLLECTION && <>
            <DetailRow label={"Investigation"} value={props.investigation.value} link={props.investigation.link} />
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Discipline Name"} value={props.disciplineName.value} link={props.disciplineName.link} />
            <DetailRow label={"DOI"} value={props.doi.value} link={props.doi.link} />
            <DetailRow label={"Processing Level"} value={props.processingLevel.value} link={props.processingLevel.link} />
            <DetailRow label={"Start Date"} value={props.startDate.value} link={props.startDate.link} />
            <DetailRow label={"Stop Date"} value={props.stopDate.value} link={props.stopDate.link} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.DATA_SET && <>
            <DetailRow label={"Investigation"} value={props.investigation.value} link={props.investigation.link} />
            <DetailRow label={"Discipline Name"} value={props.disciplineName.value} link={props.disciplineName.link} />
            <DetailRow label={"DOI"} value={props.doi.value} link={props.doi.link} />
            <DetailRow label={"Processing Level"} value={props.processingLevel.value} link={props.processingLevel.link} />
            <DetailRow label={"Target"} value={props.target.value} link={props.target.link} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.INSTRUMENT && <>
            <DetailRow label={"Investigation"} value={props.investigation.value} link={props.investigation.link} />
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Instrument Type"} value={props.instrumentType.join(", ")} />
            <DetailRow label={"Start Date"} value={props.startDate.value} link={props.startDate.link} />
            <DetailRow label={"Stop Date"} value={props.stopDate.value} link={props.stopDate.link} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.INVESTIGATION && <>
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Start Date"} value={props.startDate.value} link={props.startDate.link} />
            <DetailRow label={"Stop Date"} value={props.stopDate.value} link={props.stopDate.link} />
            <DetailRow label={"Instrument Hosts"} value={props.instrumentHostTitles.join(", ")} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.TARGET && <>
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Type"} value={props.targetType.join(", ")} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.TOOL && <>
            <DetailRow label={"URL"} value={props.url.value} link={props.url.link} />
            <DetailRow label={"Support"} value={props.support.value} link={props.support.link} />
            <DetailRow label={"Version"} value={props.version.value} link={props.version.link} />
            <DetailRow label={"Category"} value={props.categories.join(",")} />
          </>
        }
        <DetailRow value={props.tags} variant={DetailRowVariant.TAGS} />
      </Stack>
    </Box>
  )

};