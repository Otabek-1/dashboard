import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Button,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
    return (
        <Card className=" h-screen w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mx-auto ml-6 p-4">
                <img src="/logo.png" alt="" />
            </div>
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    E-Commerce
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
            <div className="bottom-10 absolute">
                <div className="bottom-0 relative h-[255px] flex flex-col items-center gap-4 justify-center bg-gradient-to-b from-[#fcf8f8] p-3 to-[#986698] rounded-[10px]">
                    <img className="absolute top-[-25%] mx-auto w-[106px]" src="SitebarCub.png" alt="" />
                    <h2 className="mx-auto max-w-[200px] text-xl font-semibold text-black text-center">Upgrade Your Dashboard</h2>
                    <Button className="max-w-[126px] w-full bg-indigo-800 mx-auto">Upgrade</Button>
                </div>
            </div>
        </Card>
    );
}