import renderer from "react-test-renderer"
import { Loader } from "./Loader"

describe('Loader', () => {

  test('Indeterminate Loader component renders correctly', () => {
    const component = renderer.create(
      <Loader variant="indeterminate" />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Determinate Loader component renders correctly', () => {

    const component = renderer.create(
      <Loader variant={'determinate'} value={17} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})