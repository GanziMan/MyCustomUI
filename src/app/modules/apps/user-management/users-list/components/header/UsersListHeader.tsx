import { useListView } from '../../core/ListViewProvider'
import { UsersListToolbar } from './UserListToolbar'
import { UsersListGrouping } from './UsersListGrouping'
import { UsersListSearchComponent } from './UsersListSearchComponent'

const UsersListHeader = () => {
  const { selected } = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Source</span>
        <span className='text-muted mt-1 fw-semibold fs-7'>Source Schedule</span>
      </h3>
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <UsersListGrouping /> : <UsersListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export { UsersListHeader }
