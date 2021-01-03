import React from 'react';
import { Router } from "./router";
import { Provider as ReduxProvider } from "react-redux"
import store from "./slices/store"
import {AppLayout} from "./Layout/index"

const App:React.FC=()=> {
  return (
    <div>
      <ReduxProvider store={store}>
        <AppLayout>
        <Router />
        </AppLayout>
      </ReduxProvider>


    </div>
  );
}

export default App;
