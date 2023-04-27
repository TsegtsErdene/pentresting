import {
    HiEye,
    HiDocumentText,
    HiSearch,
    HiDatabase,
    HiGlobeAlt,
    HiKey,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'gathering',
        label: 'Gathering',
        path: '/',
        icon: <HiEye />
    },
    {
        key: 'enumeration',
        label: 'Enumeration',
        path: '/enumeration',
        icon: <HiDocumentText />
    },
    {
        key: 'vulnerability',
        label: 'Vulnerability',
        path: '/vulnerability',
        icon: <HiSearch />
    },
    {
        key: 'sqlinjection',
        label: 'SQL Injection',
        path: '/sqlinjection',
        icon: <HiDatabase />
    },
    {
        key: 'webheader',
        label: 'WEB Header',
        path: '/webheader',
        icon: <HiGlobeAlt />
    },
    {
        key: 'encryption',
        label: 'Encryption Encode',
        path: '/encryption',
        icon: <HiKey />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]
