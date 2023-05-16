import {useLocation} from 'react-router-dom'
import {useListView} from '../../core/ListViewProvider'
import {SourceListToolbar} from './SourceListToolbar'
import {UsersListGrouping} from './UsersListGrouping'

const SourceListHeader = () => {
  const {selected} = useListView()
  const {state} = useLocation()
  return (
    <div className='card-header border-0 pt-6'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'> Source</span>
        <span className='text-muted mt-1 fw-semibold fs-7'>Source Schedule</span>
      </h3>
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <UsersListGrouping /> : <SourceListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {SourceListHeader}
