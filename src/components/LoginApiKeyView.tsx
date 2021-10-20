import { Button, FormControl, Stack, TextField } from "@mui/material";
import { ChangeEvent, Component } from "react";

interface IProps {
    register: (apiKey: string) => Promise<void>
}

interface IState {
    api_key: string
}

export class LoginApiKeyView extends Component<IProps, IState> {
    state = {
        api_key: ''
    }

    handleApiKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({api_key: e.target.value})
    }

    handleLogin = () => {
        this.props.register(this.state.api_key)
    }

    render() {
        return (
            <Stack direction="row" spacing={2}>
                <FormControl fullWidth>
                    <TextField label="API Key" value={this.state.api_key} onChange={this.handleApiKeyChange}/>
                </FormControl>
                <Button variant="contained" onClick={this.handleLogin} disabled={this.state.api_key.length <= 0}>Login</Button>
            </Stack>
        )
    }
}