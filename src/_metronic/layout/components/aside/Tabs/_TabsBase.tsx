/* eslint-disable react/jsx-no-target-blank */
import {FC} from 'react'
import {MenuTab} from './MenuTab'


type Props = {
  link: string
}

const SelectedTab: FC<Props> = ({link}) => {
  switch (link) {
    case 'menu':
      return <MenuTab />
   
    default:
      return <MenuTab />
  }
}

const TabsBase: FC<Props> = ({link}) => {
  return (
    <div className='d-flex h-100 flex-column'>
      {/* begin::Wrapper */}
      <div
        className='flex-column-fluid hover-scroll-y'
        data-kt-scroll='true'
        data-kt-scroll-activate='true'
        data-kt-scroll-height='auto'
        data-kt-scroll-wrappers='#kt_aside_wordspace'
        data-kt-scroll-dependencies='#kt_aside_secondary_footer'
        data-kt-scroll-offset='0px'
      >
        {/* begin::Tab content */}
        <div className='tab-content'>
          <div
            className='tab-pane fade active show'
            id={`kt_aside_nav_tab_${link}`}
            role='tabpanel'
          >
            <SelectedTab link={link} />
          </div>
        </div>
        {/* end::Tab content */}
      </div>
    </div>
  )
}

export {TabsBase}
