import React from 'react'
import './App.css'
import routes from './config/routes'
import { RouteComponentProps } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component {...props} {...route.props} />
                )}
              />
            )
          })}
          {/* <Route path="/todo" component={ToDoPage}/> */}
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App
