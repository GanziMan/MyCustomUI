import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../_metronic/helpers'
import {useListView} from '../../../app/modules/apps/user-management/users-list/core/ListViewProvider'
import {getUserById} from '../../../app/modules/apps/user-management/users-list/core/_requests'

import {SourceEditModalForm} from './SourceEditModalForm'

const SourceEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getUserById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    return <SourceEditModalForm isUserLoading={isLoading} user={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <SourceEditModalForm isUserLoading={isLoading} user={user} />
  }

  return null
}

export {SourceEditModalFormWrapper}
