import renderer from 'react-test-renderer'
import { FeaturedLink } from "./FeaturedLink"
import { FeaturedLinkDetails, FeaturedLinkDetailsVariant } from '../FeaturedLinkDetails'

describe('FeaturedLink', () => {

  test('FeaturedLink component renders correctly', () => {
    const component = renderer.create(
      <FeaturedLink
        title='urn:ESA:PSA:context:instrument_host:* context products'
        description='The PDS4 Context Products for ESA instrument hosts, e.g. Rosetta spacecraft'
        primaryLink="https://pds.nasa.gov/"
      >
        <FeaturedLinkDetails
          variant={FeaturedLinkDetailsVariant.INVESTIGATION}
          instrumentHostTitles={["Voyager 1", "Voyager 2"]}
          lid={{value:"urn:nasa:pds:context:investigation:mission.voyager"}}
          startDate={{value: ""}}
          stopDate={{value: ""}}
        />
      </FeaturedLink>
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})