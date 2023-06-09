import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {MasterInit} from '../_metronic/layout/MasterInit'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {AuthInit} from './modules/auth'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <ToastContainer></ToastContainer>
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
