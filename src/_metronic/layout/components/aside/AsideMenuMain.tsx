/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { AsideMenuItem } from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
        
      ></AsideMenuItem>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>SOURCE</span>
        </div>
      </div>
      <AsideMenuItem
        to='/transtypesource'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Add Source'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/sourceschedule'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Source'
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>TARGET</span>
        </div>
      </div>
      <AsideMenuItem
        to='/targethorizon'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Add Target'
        fontIcon='bi-app-indicator'
      />


      <AsideMenuItem
        to='/targetschedule'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Target'
        fontIcon='bi-app-indicator'
      />


      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>FLOW </span>
        </div>
      </div>
      <AsideMenuItem
        to='/dagcreate'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Add Dag'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/flowschedule'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Flows'
        fontIcon='bi-app-indicator'
      />


      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>CONNECTION</span>
        </div>
      </div>
      <AsideMenuItem
        to='/tfilehorizon'
        icon='/media/icons/duotune/general/gen019.svg'
        title='SFTP Regist'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/dbinfohorizon'
        icon='/media/icons/duotune/general/gen019.svg'
        title='DB Regist'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/connectionlist'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Connection List'
        fontIcon='bi-app-indicator'
      />
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub> */}



   
    </>
  )
}
