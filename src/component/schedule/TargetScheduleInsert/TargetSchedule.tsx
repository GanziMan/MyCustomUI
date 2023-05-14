import { ListViewProvider } from "../../../app/modules/apps/user-management/users-list/core/ListViewProvider"
import { QueryRequestProvider } from "../../../app/modules/apps/user-management/users-list/core/QueryRequestProvider"
import { TargetsSchedule } from "./TargetsSchedule"

const TargetList = () => {
  return (
    <div className='row gy-5 g-xl-1'>
      <TargetsSchedule className="" />
    </div>
  )
}

const TargetSchedule = () => (
  <QueryRequestProvider>
    <ListViewProvider>
      <TargetList />
    </ListViewProvider>
  </QueryRequestProvider>
)

export { TargetSchedule }