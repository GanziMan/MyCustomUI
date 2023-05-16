import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../_metronic/helpers'
import {getUserById} from '../../../app/modules/apps/user-management/users-list/core/_requests'
import {useListView} from '../../../app/modules/apps/user-management/users-list/core/ListViewProvider'

import {TargetEditModalForm} from './TargetEditModalForm'

const TargetEditModalFormWrapper = () => {
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
    return <TargetEditModalForm isUserLoading={isLoading} user={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <TargetEditModalForm isUserLoading={isLoading} user={user} />
  }

  return null
}

export {TargetEditModalFormWrapper}
