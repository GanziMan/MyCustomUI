
import { ListViewProvider } from "../../../app/modules/apps/user-management/users-list/core/ListViewProvider"
import { QueryRequestProvider } from "../../../app/modules/apps/user-management/users-list/core/QueryRequestProvider"
import { SourceScheduleTable } from "./SourceScheduleTable.tsx"

const SourceList = () => {

  return (
      <div className='row gy-5 g-xl-1'>
        <SourceScheduleTable className="className='card-xxl-stretch mb-5 mb-xl-8'" />
      </div>
  )
}

const SourceSchedule = () => (
  <QueryRequestProvider>
    <ListViewProvider>
      <SourceList />
    </ListViewProvider>
  </QueryRequestProvider>
)

export { SourceSchedule }