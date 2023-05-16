import {KTCard} from '../../../_metronic/helpers'
import {ListViewProvider} from '../../../app/modules/apps/user-management/users-list/core/ListViewProvider'
import {QueryRequestProvider} from '../../../app/modules/apps/user-management/users-list/core/QueryRequestProvider'
import {QueryResponseProvider} from '../../../app/modules/apps/user-management/users-list/core/QueryResponseProvider'
import {TargetsSchedule} from './TargetsSchedule'

const FlowList = () => {
  return (
    <>
      <KTCard>
        <TargetsSchedule className='' />
      </KTCard>
    </>
  )
}

const FlowSchedule = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <FlowList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {FlowSchedule}
