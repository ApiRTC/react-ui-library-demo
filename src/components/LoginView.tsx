import { RegisterInformation } from "@apizee/apirtc";
import { LoginForm } from "@apizee/apizee-components-alpha";
import { Component } from "react";

interface IProps {
    cloud_url: string,
    login: (username: string, password: string, opts?: RegisterInformation | undefined) => Promise<void>
}

export class LoginView extends Component<IProps> {
    handleLogin = async (username: string, password: string): Promise<any> => {
        await this.props.login(username, password, {
            cloudUrl: this.props.cloud_url
        })
    }

    render() {
        return (
            <LoginForm title="Demo App" onSubmit={this.handleLogin}/>
        )
    }
}