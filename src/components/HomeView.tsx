import { Container, Divider, Link, Typography } from "@mui/material"
import { Component } from "react"

interface IProps {
    username: string
}

export class HomeView extends Component<IProps> {
    render() {
        return (
            <Container>
                <Typography variant="h2" textAlign="center" gutterBottom>Home</Typography>
                <Divider sx={{marginBottom: 5}}/>
                <Typography variant="body1" textAlign="center" gutterBottom>Welcome <b>{this.props.username}</b> to the ApiRTC's React component demo page.</Typography>
                <Typography variant="body1">The purpose of this website is to put on the stage Components already used in ApiRTC's products. You just have to select an app in the navbar bellow to get started. <em>Also you can dig deeper by looking at the <Link href="https://www.apizee.com/inte/storybook-apizee-components-alpha/">Storybook</Link></em></Typography>
            </Container>
        )
    }
}