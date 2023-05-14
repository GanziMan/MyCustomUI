import { KTCard } from "../../../_metronic/helpers"
import { ListViewProvider, useListView } from "../../../app/modules/apps/user-management/users-list/core/ListViewProvider"
import { QueryRequestProvider } from "../../../app/modules/apps/user-management/users-list/core/QueryRequestProvider"
import { QueryResponseProvider } from "../../../app/modules/apps/user-management/users-list/core/QueryResponseProvider"
import { TargetsSchedule } from "./TargetsSchedule"

const FlowsSchedule = () => {
    return (
      <>
        <KTCard>
          <TargetsSchedule className=""/>
        </KTCard>
      </>
    )
  }

  const TargetSchedule = () =>(
    <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <FlowsSchedule />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
  )

  export {FlowsSchedule}