import { Chat } from "@apizee/apizee-components-alpha";
import { Container, FormControl, Typography, TextField, Button, Stack } from "@mui/material";
import { ChangeEvent, Component } from "react";
import { WhiteboardView } from "./WhiteboardView";

interface IProps {
    apirtc: any
}

interface IState {
    conversation_name: string,
    validated: boolean
}

export class TchatView extends Component<IProps, IState> {
    state = {
        conversation_name: '',
        validated: false
    }

    handleConvNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({conversation_name: e.target.value})
    }

    join = () => {
        this.setState({validated: true})
    }

    render() {
        return (
            <Container>
                <Typography variant="h2" textAlign="center" gutterBottom>Tchat</Typography>
                { !this.state.validated && 
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <FormControl>
                            <TextField label="Conversation name" value={this.state.conversation_name} onChange={this.handleConvNameChange}/>
                        </FormControl>
                        <Button variant="contained" onClick={this.join} disabled={this.state.conversation_name.length <= 0}>Join</Button>
                    </Stack>
                }
                { this.state.validated && 
                    <Stack direction="row" gap={1}>
                        <Chat conversationName={this.state.conversation_name} composer={{ withEmojis: true }}/>
                        { this.props.apirtc.session!.getUserAgent().getEnterprise() !== null &&
                            <WhiteboardView conversation_name={this.state.conversation_name} session={this.props.apirtc.session!}/>
                        }
                    </Stack>
                }
            </Container>
        )
    }
}