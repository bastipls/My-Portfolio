import React from 'react'
import { Provider } from 'react-redux'
import  store  from './store'
import { AppRouter } from './routers/AppRouter'
import './assets/scss/styles.scss'
export const PortofliotApp = () => {
    return (
        <Provider store={store}>
            <AppRouter  />
        </Provider>
    )
}
