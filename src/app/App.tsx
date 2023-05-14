import axios from 'axios'
import {Suspense, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {Outlet} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { saveBigLeague } from '../redux/actions/actions'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {MasterInit} from '../_metronic/layout/MasterInit'
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
