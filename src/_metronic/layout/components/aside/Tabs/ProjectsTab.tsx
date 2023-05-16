import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../helpers'

const projects: ReadonlyArray<{
  image: string
  title: string
  link: string
  image2: string
  title2: string
  link2: string
}> = [
  {
    image: '/media/svg/brand-logos/bebo.svg',
    title: 'ALL SOURCES',
    link: 'By James',
    image2: '/media/svg/brand-logos/vimeo.svg',
    title2: 'ALL TARGETS',
    link2: 'By Andres',
  },
  // {
  //   image: '/media/svg/brand-logos/kickstarter.svg',
  //   title: 'KC Account CRM',
  //   link: 'By Keenthemes',
  // },
  // {
  //   image: '/media/svg/brand-logos/balloon.svg',
  //   title: 'Baloon SaaS',
  //   link: 'By SIA Team',
  // },
  // {
  //   image: '/media/svg/brand-logos/infography.svg',
  //   title: 'Most Cloudy UMC',
  //   link: 'By Andrei',
  // },
  // {
  //   image: '/media/svg/brand-logos/disqus.svg',
  //   title: 'Disqus Forum',
  //   link: 'By Disqus Inc.',
  // },
  // {
  //   image: '/media/svg/brand-logos/plurk.svg',
  //   title: 'Proove Quick CRM',
  //   link: 'By Proove Limited',
  // },
]

const ProjectsTab2 = () => {
  return (
    <div className='m-0'>
      {/* begin::Toolbar */}
      {/* <div className='d-flex mb-10'>
        <Search />
        <div className='flex-shrink-0 ms-2'>
          <button
            type='button'
            className='btn btn-icon btn-bg-light btn-active-icon-primary btn-color-gray-400'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
        </div>

      </div> */}
      {/* end::Toolbar */}

      {/*begin::Projects*/}
      <div className='m-0'>
        {/*begin::Heading*/}
        <h1 className='text-success-800 fw-bold mb-6 mx-5'>Schedule</h1>
        {/*end::Heading*/}

        {/*begin::Items*/}
        <div className='mb-10'>
          {projects.map((p) => (
            <Link
              key={p.link}
              to='/apps/user-management/users'
              className='custom-list d-flex align-items-center px-5 py-4'
            >
              {/*begin::Symbol*/}
              <div className='symbol symbol-40px me-5'>
                <span className='symbol-label'>
                  <img
                    src={toAbsoluteUrl(p.image)}
                    alt={p.title}
                    className='h-50 align-self-center'
                  />
                </span>
              </div>
              {/*end::Symbol*/}

              {/*begin::Description*/}
              <div className='d-flex flex-column flex-grow-1'>
                {/*begin::Title*/}
                <h5 className='custom-list-title fw-bold text-success-800 mb-1'>{p.title}</h5>
                {/*end::Title*/}

                {/*begin::Link*/}
                <span className='text-success-400 fw-bold'>{p.link}</span>
                {/*end::Link*/}
              </div>
              {/*begin::Description*/}
            </Link>
          ))}
        </div>
        <div className='mb-10'>
          {projects.map((p) => (
            <Link
              key={p.link2}
              to='/apps/user-management/users'
              className='custom-list d-flex align-items-center px-5 py-4'
            >
              {/*begin::Symbol*/}
              <div className='symbol symbol-40px me-5'>
                <span className='symbol-label'>
                  <img
                    src={toAbsoluteUrl(p.image2)}
                    alt={p.title2}
                    className='h-50 align-self-center'
                  />
                </span>
              </div>
              {/*end::Symbol*/}

              {/*begin::Description*/}
              <div className='d-flex flex-column flex-grow-1'>
                {/*begin::Title*/}
                <h5 className='custom-list-title fw-bold text-success-800 mb-1'>{p.title2}</h5>
                {/*end::Title*/}

                {/*begin::Link*/}
                <span className='text-success-400 fw-bold'>{p.link2}</span>
                {/*end::Link*/}
              </div>
              {/*begin::Description*/}
            </Link>
          ))}
        </div>
        {/*end::Items*/}
      </div>
      {/*end::Projects*/}
    </div>
  )
}

export {ProjectsTab2}
