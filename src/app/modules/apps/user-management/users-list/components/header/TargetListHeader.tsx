import { useListView } from '../../core/ListViewProvider'
import { TargetListToolbar } from './TargetListToolbar'
import { UsersListGrouping } from './UsersListGrouping'

const TargetListHeader = () => {
  const { selected } = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Target</span>
        <span className='text-muted mt-1 fw-semibold fs-7'>Target Schedule</span>
      </h3>
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <UsersListGrouping /> : <TargetListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export { TargetListHeader }
