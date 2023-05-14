import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../../component/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { TargetSchedule } from '../../component/schedule/TargetScheduleInsert/TargetSchedule'

import { TranstypeComponent } from '../../component/source/transtypeComponent'
import { AuthPage } from '../modules/auth'
import { FileHorizon } from '../../component/source/file/FileHorizon'
import { DBHorizon } from '../../component/source/db/Dbhorizon'
import { TFileHorizon } from '../../component/sftp/file/TFileHorizon'
import { DBInfoHorizon } from '../../component/source/dbinfo/DBInfoHorizon'
import { SourceDetails } from '../../component/source/SourceDetails'
import { TargetHorizon } from '../../component/target/file/TargetHorizon'
import { FlowFileHorizon } from '../../component/flow/file/flowFileHorizon'
import { FlowDbhorizon } from '../../component/flow/db/flowDbhorizon'
import { FlowTranstypeComponent } from '../../component/flow/FlowtranstypeComponent'
import { FlowsSchedule2 } from '../../component/schedule/FlowsSchedule'
import { FlowDetails } from '../../component/flow/FlowDetails'
import { ConnectionList } from '../../component/connection/ConnectionList'
import { TaskList } from '../../component/flow/TaskList'
import { FileUpdate } from '../../component/source/file/FileUpdate'
import { DBUpdate } from '../../component/source/db/DBUpdate'
import { TargetDetails } from '../../component/target/TargetDetails'
import { TargetUpdate } from '../../component/target/file/TargetUpdate'
import { SourceSchedule } from '../../component/schedule/ScheduleInsert/SourceSchedule'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      
      <Route element={<MasterLayout />}>
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='Login' element={<AuthPage />} />
        <Route path='sourceschedule' element={<SourceSchedule/>}/>
        <Route path='targetschedule' element={<TargetSchedule/>}/>
        <Route path='flowschedule' element={<FlowsSchedule2 className=''/>}/>
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        <Route path='transtypesource' element={<TranstypeComponent />} />
        <Route path='transtypesource/filehorizon' element={<FileHorizon />} />
        <Route path='dbhorizon' element={<DBHorizon />} />
        <Route path='dbinfohorizon' element={<DBInfoHorizon />} />
        <Route path='tfilehorizon' element={<TFileHorizon />} />
        <Route path='sourcedetails' element={<SourceDetails />} />
        <Route path='targethorizon' element={<TargetHorizon />} />
        <Route path='flowfilehorizon' element={<FlowFileHorizon />} />
        <Route path='flowdbhorizon' element={<FlowDbhorizon />} />
        <Route path='dagcreate' element={<FlowTranstypeComponent />} />
        <Route path='flowdetails' element={<FlowDetails />} />
        <Route path='connectionlist' element={<ConnectionList/>} />
        <Route path='tasklist' element={<TaskList/>} />
        <Route path='sourcefileupdate' element={<FileUpdate/>} />
        <Route path='sourcedbupdate' element={<DBUpdate/>} />
        <Route path='targetdetails' element={<TargetDetails/>} />
        <Route path='targetupdate' element={<TargetUpdate/>} />
        
        {/* Lazy Modules */}

        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-success')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
