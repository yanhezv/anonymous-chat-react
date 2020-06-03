import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import { UserContextProvider } from './contexts/UserContext';

const App: React.FC = () => {
   return (
      <Fragment>
         <Normalize/>
         <DatabaseContextProvider>
            <UserContextProvider>
               <ThemeProvider theme={chatTheme}>
                  <GlobalStyles/>
                  <Layout>
                     <Switch>
                        <Route exact path="/chats" component={Chats}/>
                        <Route exact path="/groups" component={Groups}/>
                        <Route exact path="/users" component={Users}/>
                        <Route exact path="/search" component={Searcher}/>
                        <Route exact path="/chat/:chatId" component={Chat}/>
                        <Redirect exact path="/chat" to="/chats"/>
                        <Redirect exact path="/" to="/chats"/>
                     </Switch>
                  </Layout>
               </ThemeProvider>
            </UserContextProvider>
         </DatabaseContextProvider>
      </Fragment>
   );
}

export default App;
