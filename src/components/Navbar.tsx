import { IconCalendar, IconChatFull, IconHome } from "@apizee/apizee-components-alpha";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Component, SyntheticEvent } from "react";
import { Pages } from "../App";

interface IProps {
    page: Pages,
    setPage: Function
}

export class Navbar extends Component<IProps, {}> {

    handleNavChange = (e: SyntheticEvent<Element, Event>, value: any) => {
        this.props.setPage(value)
    }

    render() {
        return (
            <Paper sx={{padding: 2}} elevation={5}>
                <BottomNavigation showLabels sx={{ width: 500 }} value={this.props.page} onChange={this.handleNavChange}>
                    <BottomNavigationAction
                        label="Home"
                        value={Pages.Home}
                        icon={<IconHome />}
                    />
                    <BottomNavigationAction
                        label="Agenda"
                        value={Pages.Agenda}
                        icon={<IconCalendar />}
                    />
                    <BottomNavigationAction
                        label="Tchat"
                        value={Pages.Tchat}
                        icon={<IconChatFull />}
                    />
                </BottomNavigation>
            </Paper>
        )
    }
}