import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { UsersListWrapper } from '../../../app/modules/apps/user-management/users-list/UsersList'
import { TargetSchedule } from './TargetSchedule'


const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'User Management2',
    path: '/apps/user-management/users2',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const TargetPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users2'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Source list</PageTitle>
              <TargetSchedule />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/user-management/users2' />} />
    </Routes>
  )
}

export default TargetPage
