import renderer from 'react-test-renderer'
import { Pagination } from "./Pagination"

describe('Pagination', () => {

  test('Pagination component renders correctly', () => {
    const component = renderer.create(
      <Pagination/>
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The label prop works', () => {
    const component = renderer.create(
      <Pagination />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

})