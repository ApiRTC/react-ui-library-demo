import { Container, Divider, FormControl, FormHelperText, Paper, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { AgendaView } from './components/AgendaView';
import { HomeView } from './components/HomeView';
import { LoginView } from './components/LoginView';
import { Navbar } from './components/Navbar';
import { TchatView } from './components/TchatView';
import { useApiRTC } from "@apizee/apizee-components-alpha"
import { LoginApiKeyView } from './components/LoginApiKeyView';

export enum Pages {
  Home,
  Agenda,
  Tchat
}

export function App() {
  const [page, setPage] = useState(Pages.Home)
  const [cloud_url, setCloudUrl] = useState("https://cloud.apirtc.com")
  const apirtc = useApiRTC("")

  return (
      <Container sx={{paddingY: 5}}>
        { !apirtc.session &&
          <Stack direction="column" alignItems="center" spacing={2}>
            <FormControl>
              <TextField label="Cloud URL" value={cloud_url} onChange={ (e) => setCloudUrl(e.target.value) }/>
              <FormHelperText>Cloud URL input works only for username/password login method</FormHelperText>
            </FormControl>
            <LoginView login={apirtc.login} cloud_url={cloud_url}/>
            <Divider/>
            <LoginApiKeyView register={apirtc.register}/>
          </Stack>
        }
        { apirtc.session && (
          <Stack direction="column" alignItems="center" spacing={2}>
            <Paper elevation={2} sx={{width: "100%", padding: 5, minHeight: "70vh"}}>
              { page === Pages.Home && <HomeView username={apirtc.session!.getUsername()}/> }
              { page === Pages.Agenda && <AgendaView cloud_url={cloud_url} session={apirtc.session!}/> }
              { page === Pages.Tchat && <TchatView apirtc={apirtc}/> }
            </Paper>
            <Navbar page={page} setPage={setPage}/>
          </Stack>
        ) }
      </Container>
    )
}