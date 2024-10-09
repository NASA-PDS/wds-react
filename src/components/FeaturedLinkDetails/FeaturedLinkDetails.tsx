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
  label?:string;
  link?:undefined;
  value:Array<string>;
  variant?:DetailRowVariant.TAGS;
}

type DetailRowProps = DetailRowStringProps | DetailRowTagProps;

const DetailRow = (props:DetailRowProps) => {

  let value:string | string[] = "-";
  if( props.value ) {
    if( props.value === "3000-01-01T00:00:00.000Z" || props.value === "3000-01-01T00:00:00Z") {
      value = "ongoing"
    } else {
      value = props.value;
    }
  }

  let valueElement = <Typography variant="body4" weight="regular">{value}</Typography>;
  if( props.link !== undefined ) {
    valueElement = <Link to={props.link} style={{color: "#1C67E3", textDecoration: "underline"}}>{valueElement}</Link>;
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
                <Typography variant="h6" weight="semibold">{ props.label ? props.label : "Tags" }</Typography>
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
  BUNDLE_LIST = "bundle-list",
  DATA_BUNDLE = "data-bundle",
  DATA_COLLECTION = "data-collection",
  DATA_SET = "data-set",
  FACILITY = "facility",
  INSTRUMENT = "instrument",
  INSTRUMENT_HOST = "instrument-host",
  INVESTIGATION = "investigation",
  RESOURCE = "resoruce",
  TARGET = "target",
  TELESCOPE = "telescope",
  TOOL = "tool"
}

type FeaturedLinkDetailData = {
  link?:string;
  value:string;
}

type FeaturedLinkDetailsBaseProps = {
  tags?:Array<string>;
};

export type FeaturedLinkBundleListDetailProps = FeaturedLinkDetailsBaseProps & {
  bundleGroups:Array<{
    title: "Calibrated Data Products" | "Derived Data Products" | "Partially Processed Data Products" | "Raw Data Products" | "Telemetry Data Products",
    items:Array<{
      title:string,
      description:string,
      link:string
    }>
  }>;
  variant:FeaturedLinkDetailsVariant.BUNDLE_LIST;
}

export type FeaturedLinkDataBundleDetailsProps = FeaturedLinkDetailsBaseProps & {
  disciplineName:Array<string>;
  doi:FeaturedLinkDetailData;
  investigation:FeaturedLinkDetailData;
  lid:FeaturedLinkDetailData;
  processingLevel:Array<string>;
  startDate:FeaturedLinkDetailData;
  stopDate:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.DATA_BUNDLE;
}

export type FeaturedLinkDataCollectionDetailsProps = FeaturedLinkDetailsBaseProps & {
  disciplineName:Array<string>;
  doi:FeaturedLinkDetailData;
  investigation:FeaturedLinkDetailData;
  processingLevel:Array<string>;
  lid:FeaturedLinkDetailData;
  startDate:FeaturedLinkDetailData;
  stopDate:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.DATA_COLLECTION;
}

export type FeaturedLinkDataSetDetailsProps = FeaturedLinkDetailsBaseProps & {
  disciplineName:Array<string>;
  doi:FeaturedLinkDetailData;
  investigation:FeaturedLinkDetailData;
  processingLevel:Array<string>;
  target:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.DATA_SET;
}

export type FeaturedLinkFacilityDetailsProps = FeaturedLinkDetailsBaseProps & {
  country: Array<string>;
  lid: FeaturedLinkDetailData;
  telescopes: Array<string>;
  type: Array<string>;
  variant: FeaturedLinkDetailsVariant.FACILITY;
}

export type FeaturedLinkInstrumentDetailsProps = FeaturedLinkDetailsBaseProps & {
  investigation:FeaturedLinkDetailData;
  lid:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.INSTRUMENT;
}

export type FeaturedLinkInstrumentHostDetailsProps =
  FeaturedLinkDetailsBaseProps & {
    investigation: FeaturedLinkDetailData;
    instruments: Array<string>;
    lid: FeaturedLinkDetailData;
    variant: FeaturedLinkDetailsVariant.INSTRUMENT_HOST;
};


export type FeaturedLinkInvestigationDetailsProps = FeaturedLinkDetailsBaseProps & {
  instrumentHostTitles:Array<string>;
  investigationType:Array<string>;
  lid:FeaturedLinkDetailData;
  startDate:FeaturedLinkDetailData;
  stopDate:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.INVESTIGATION;
}

export type FeaturedLinkResourceDetailProps = FeaturedLinkDetailsBaseProps & {
  format:FeaturedLinkDetailData;
  size:FeaturedLinkDetailData;
  version:FeaturedLinkDetailData;
  year:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.RESOURCE;
}

export type FeaturedLinkTargetDetailsProps = FeaturedLinkDetailsBaseProps & {
  lid:FeaturedLinkDetailData;
  targetType:Array<string>;
  variant:FeaturedLinkDetailsVariant.TARGET;
}

export type FeaturedLinkTelescopeDetailsProps = FeaturedLinkDetailsBaseProps & {
  facility: Array<string>;
  instruments: Array<string>;
  lid: FeaturedLinkDetailData;
  variant: FeaturedLinkDetailsVariant.TELESCOPE;
};

export type FeaturedLinkToolDetailsProps = FeaturedLinkDetailsBaseProps & {
  categories:Array<string>;
  support:FeaturedLinkDetailData;
  url:FeaturedLinkDetailData;
  variant:FeaturedLinkDetailsVariant.TOOL;
  version:FeaturedLinkDetailData;
}

export type FeaturedLinkDetailsProps = (
  FeaturedLinkBundleListDetailProps
  | FeaturedLinkDataBundleDetailsProps 
  | FeaturedLinkDataCollectionDetailsProps
  | FeaturedLinkDataSetDetailsProps
  | FeaturedLinkFacilityDetailsProps
  | FeaturedLinkInstrumentDetailsProps 
  | FeaturedLinkInstrumentHostDetailsProps
  | FeaturedLinkInvestigationDetailsProps
  | FeaturedLinkResourceDetailProps
  | FeaturedLinkTargetDetailsProps
  | FeaturedLinkTelescopeDetailsProps
  | FeaturedLinkToolDetailsProps
);

export const FeaturedLinkDetails = (props:FeaturedLinkDetailsProps) => {

  return (
    <Box sx={{
      backgroundColor: "#F6F6F6",
      padding: { xs: "20px 20px 20px 20px", md: "20px 80px 20px 80px" },
    }}>
      <Stack spacing={"5px"}>
        {
          props.variant === FeaturedLinkDetailsVariant.BUNDLE_LIST && <>
            {
              <Stack gap={"20px"}>
                {
                props.bundleGroups.map( (group, bundleIndex) => {
                  return (
                    <Stack key={bundleIndex} gap={"12px"}>
                      <Typography variant="h6" weight="semibold">{group.title}</Typography>
                      {
                        group.items.map( (item, itemIndex) => {
                          return (
                            <Stack direction={"column"} gap={"8px"} key={itemIndex}>
                              <Link to={item.link}>
                                <Typography variant="body5" weight="regular">{item.title}</Typography>
                              </Link>
                              <Typography variant="body5" weight="regular" sx={{paddingLeft: "32px"}}>{item.description}</Typography>
                            </Stack>
                          )
                        })
                      }
                    </Stack>
                  );
                })
                }
              </Stack>
            }
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.DATA_BUNDLE && <>
            <DetailRow label={"Investigation"} value={props.investigation.value} link={props.investigation.link} />
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Discipline Name"} value={props.disciplineName.join(",")}/>
            <DetailRow label={"DOI"} value={props.doi.value} link={props.doi.link} />
            <DetailRow label={"Processing Level"} value={props.processingLevel.join(",")} />
            <DetailRow label={"Start Date"} value={props.startDate.value} link={props.startDate.link}/>
            <DetailRow label={"Stop Date"} value={props.stopDate.value} link={props.startDate.link}/>
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.DATA_COLLECTION && <>
            <DetailRow label={"Investigation"} value={props.investigation.value} link={props.investigation.link} />
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Discipline Name"} value={props.disciplineName.join(",")} />
            <DetailRow label={"DOI"} value={props.doi.value} link={props.doi.link} />
            <DetailRow label={"Processing Level"} value={props.processingLevel.join(",")} />
            <DetailRow label={"Start Date"} value={props.startDate.value}  link={props.startDate.link}/>
            <DetailRow label={"Stop Date"} value={props.stopDate.value}  link={props.stopDate.link}/>
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.DATA_SET && <>
            <DetailRow label={"Investigation"} value={props.investigation.value} link={props.investigation.link} />
            <DetailRow label={"Discipline Name"} value={props.disciplineName.join(",")} />
            <DetailRow label={"DOI"} value={props.doi.value} link={props.doi.link} />
            <DetailRow label={"Processing Level"} value={props.processingLevel.join(",")} />
            <DetailRow label={"Target"} value={props.target.value} link={props.target.link}/>
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.FACILITY && <>
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Type"} value={props.type.join(",")} />
            <DetailRow label={"Country"} value={props.country.join(",")} />
            <DetailRow label={"Telescopes"} value={props.telescopes.join(",")} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.INSTRUMENT && <>
            <DetailRow label={"Investigation"} value={props.investigation.value} link={props.investigation.link} />
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.INSTRUMENT_HOST && <>
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Investigation"} value={props.investigation.value} link={props.investigation.link} />
            <DetailRow label={"Instruments"} value={props.instruments.join(",")} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.INVESTIGATION && <>
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Start Date"} value={props.startDate.value} link={props.startDate.link}/>
            <DetailRow label={"Stop Date"} value={props.stopDate.value} link={props.stopDate.link}/>
            <DetailRow label={"Instrument Hosts"} value={props.instrumentHostTitles.join(", ")} />
            <DetailRow label={"Investigation Type"} value={props.investigationType.join(", ")} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.RESOURCE && <>
            <DetailRow label={"Version"} value={props.version.value} />
            <DetailRow label={"Year"} value={props.year.value} />
            <DetailRow label={"Format"} value={props.format.value} />
            <DetailRow label={"Size"} value={props.size.value} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.TARGET && <>
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Type"} value={props.targetType.join(", ")} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.TELESCOPE && <>
            <DetailRow label={"Identifier"} value={props.lid.value} link={props.lid.link} />
            <DetailRow label={"Instruments"} value={props.instruments.join(", ")} />
            <DetailRow label={"Facility"} value={props.facility.join(",")} />
          </>
        }
        {
          props.variant === FeaturedLinkDetailsVariant.TOOL && <>
            <DetailRow label={"URL"} value={props.url.value} link={props.url.link} />
            <DetailRow label={"Support"} value={props.support.value} link={props.support.link}/>
            <DetailRow label={"Version"} value={props.version.value} link={props.version.link}/>
            <DetailRow label={"Category"} value={props.categories.join(",")} />
          </>
        }
        {
          props.tags && <>
            <DetailRow value={props.tags} variant={DetailRowVariant.TAGS}/>
          </>
        }
      </Stack>
    </Box>
  )

};