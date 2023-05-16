import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../_metronic/layout/core'
import {TargetsWidget} from '../../_metronic/partials/widgets'
import {CPUUsage} from '../monitoring/CPUUsage'
import {ImportErrorWidget} from '../monitoring/ImportErrorWidget'
import {Progress} from '../monitoring/Progress'
import {FlowsWidget} from '../widget/FlowsWidget'
import {SourcesWidget} from '../widget/SourcesWidget'

import 'react-toastify/dist/ReactToastify.css'

const dashboardBreadCrumbs: Array<PageLink> = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
]
const DashboardPage = () => {
  return (
    <>
      <div className='row gy-5 g-xl-8'>
        <div className='col-xl-4'>
          <CPUUsage
            className='card-xl-stretch-50 mb-xl-8'
            color='success'
            title='Avarage'
            description='CPU Usage'
          />
          <Progress
            className='card-xl-stretch-50 mb-xl-8'
            color='success'
            title='Avarage'
            description='Progress'
          />
        </div>
        <div className='col-xl-8'>
          <ImportErrorWidget className='card-xl-stretch bg-light-danger mb-xl-8' />
        </div>
      </div>
      <div className='row gy-5 g-xl-8'>
        <div className='col-xl-4'>
          <SourcesWidget className='card-xxl-stretch-50 mb-5 mb-xl-8' color='white' />
        </div>
        <div className='col-xl-4'>
          <FlowsWidget className='card-xxl-stretch-50 mb-5 mb-xl-8' color='white' />
        </div>
        <div className='col-xl-4'>
          <TargetsWidget className='card-xxl-stretch-50 mb-5 mb-xl-8' color='white' />
        </div>
      </div>
    </>
  )
}
const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={dashboardBreadCrumbs}>
        {intl.formatMessage({id: 'MENU.DASHBOARD'})}
      </PageTitle>
      <DashboardPage />
    </>
  )
}
export {DashboardWrapper}
