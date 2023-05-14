/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { ThemeModeSwitcher } from '../../../partials'
import { ClusterWidget } from '../../../partials/widgets/statistics/ClusterWidget'
import { SystemWidget } from '../../../partials/widgets/statistics/SystemWidget'

const Topbar: FC = () => (
  <div className='d-flex flex-shrink-0'>
    <div className='d-flex align-items-center ms-3'><ClusterWidget
      className='card-xl-stretch mb-xl-0'
      title='STORAGE'
      nodesAvailableColor='success'
      nodesAvailable='Nodes available 1/1'
      agentsAvailableColor='success'
      agentsAvailable='Agents available 1/1'
    ></ClusterWidget></div>
    <div className='d-flex align-items-center ms-3'><SystemWidget
      className='card-xl-stretch mb-xl-0'
      title='CLUSTER'
      nodesAvailableColor='success'
      nodesAvailable='Nodes available 1/1'
      agentsAvailableColor='success'
      agentsAvailable='Agents available 1/1'
    ></SystemWidget></div>
    <div className='d-flex align-items-center ms-3'>
      <ThemeModeSwitcher toggleBtnClass=' flex-center bg-body btn-color-gray-600 btn-active-color-success h-40px' />
    </div>

  </div>
)

export { Topbar }
