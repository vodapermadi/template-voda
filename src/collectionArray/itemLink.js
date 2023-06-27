import DashboardIcon from '@mui/icons-material/Dashboard'
import BackupTableIcon from '@mui/icons-material/BackupTable'
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { SvgIcon } from '@mui/material';

export const itemLink = [
    {
        title: "Dashboard",
        path: "/",
        icon: (
            <SvgIcon>
                <DashboardIcon />
            </SvgIcon>
        )
    },
    {
        title: "Tables",
        path: "/tables",
        icon: (
            <SvgIcon>
                <BackupTableIcon />
            </SvgIcon>
        )
    },
    {
        title: "Charts",
        path: "/charts",
        icon: (
            <SvgIcon>
                <BarChartIcon />
            </SvgIcon>
        )
    },
    {
        title: "Forms",
        path: "/forms",
        icon: (
            <SvgIcon>
                <FormatAlignJustifyIcon />
            </SvgIcon>
        )
    },
]