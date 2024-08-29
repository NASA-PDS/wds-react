import renderer from 'react-test-renderer'
import { Breadcrumbs } from "./Breadcrumbs"

describe('Chip', () => {

  test('Chip component renders correctly', () => {
    const component = renderer.create(
      <Breadcrumbs/>
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The label prop works', () => {
    const component = renderer.create(
      <Breadcrumbs/>
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})