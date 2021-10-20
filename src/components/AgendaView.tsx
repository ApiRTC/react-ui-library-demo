import { Session } from "@apizee/apirtc";
import { Agenda } from "@apizee/apizee-components-alpha";
import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { Locale } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { ChangeEvent, Component } from "react";

interface IProps {
    cloud_url: string,
    session: Session
}

interface IState {
    locale: Locale
}

export class AgendaView extends Component<IProps, IState> {
    state = {
        locale: enUS
    }

    handleLocaleChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
        switch (value) {
            case "en-US":
                this.setState({locale: enUS})
                break;
        
            case "fr":
                this.setState({locale: fr})
                break;
        }
    }

    render() {
        return (
            <Container>
                <Typography variant="h2" textAlign="center" gutterBottom>Agenda</Typography>
                <Stack direction="row" gap={2}>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel>Locale</FormLabel>
                        <RadioGroup value={this.state.locale.code} onChange={this.handleLocaleChange} row>
                            <FormControlLabel control={<Radio/>} value="en-US" label="🇬🇧 English"/>
                            <FormControlLabel control={<Radio/>} value="fr" label="🇫🇷 Français"/>
                        </RadioGroup>
                    </FormControl>
                </Stack>
                <Agenda
                    locale={this.state.locale}
                    bearerToken={this.props.session.getToken()}
                    requestDomain={this.props.cloud_url}
                    handleSelectEvent={()=>''}
                    handleSelectSlot={()=>''}
                />
            </Container>
        )
    }
}