import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'

import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
import {ThemeModeProvider} from './_metronic/partials/layout/theme-mode/ThemeModeProvider'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas/saga'
import rootReducer from './redux/stores/index'
import persistStore from 'redux-persist/es/persistStore'
import {PersistGate} from 'redux-persist/integration/react'

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)
const queryClient = new QueryClient()
const container = document.getElementById('root')
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

if (container) {
  createRoot(container).render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <MetronicI18nProvider>
            <ThemeModeProvider>
              <AuthProvider>
                <AppRoutes />
              </AuthProvider>
            </ThemeModeProvider>
          </MetronicI18nProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}
