import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {SourceSchedule} from './SourceSchedule'

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

const SourcePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users2'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Source list</PageTitle>
              <SourceSchedule />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/user-management/users2' />} />
    </Routes>
  )
}

export default SourcePage
