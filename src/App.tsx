import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import { Layout } from './presentation/components/Layout';
import { chatTheme } from './theme/Theme';
import { Chat } from './presentation/pages/Chat';
import { Chats } from './presentation/pages/Chats';
import { Groups } from './presentation/pages/Groups';
import { Users } from './presentation/pages/Users';
import { Searcher } from './presentation/pages/Searcher';

import { GlobalStyles } from './theme/global/general';
import { DatabaseContextProvider } from './contexts/DatabaseContext';

const App: React.FC = () => {
   return (
      <Fragment>
         <Normalize/>
         <DatabaseContextProvider>
            <ThemeProvider theme={chatTheme}>
               <GlobalStyles/>
               <Layout>
                  <Switch>
                     <Route exact path="/chats" component={Chats}/>
                     <Route exact path="/groups" component={Groups}/>
                     <Route exact path="/users" component={Users}/>
                     <Route exact path="/search" component={Searcher}/>
                     <Route exact path="/chat" component={Chat}/>
                  </Switch>
               </Layout>
            </ThemeProvider>
         </DatabaseContextProvider>
      </Fragment>
   );
}

export default App;
