import {setCategories, setError, setIsPending} from '.'
import CategoryService from '../../services/catalogue/CategoryService'


export const getCategories = () => async (dispatch) => {
  dispatch(setIsPending(true))
  try {
    const paginatedCategories = await CategoryService.getCategories()
    dispatch(setCategories({categories: paginatedCategories.results}))
  } catch (error) {
    dispatch(setError())
  } finally {
    dispatch(setIsPending(false))
  }
}
