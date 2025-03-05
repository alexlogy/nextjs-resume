import React, { ReactElement } from 'react'
import {Link, Typography, Box, SvgIconProps} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {UserInfo} from '../../consts/constants';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import WebIcon from '@mui/icons-material/Web';

interface ContactItemProps {
    icon: ReactElement<SvgIconProps>;
    text: string;
    href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: icon, text: text, href: href }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            my: 1,
            gap: 2,
        }}
    >
        {icon}
        <Link
            href={href || '#'}
            target="_blank"
            variant="inherit"
            underline="none"
            sx={{
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                    color: '#FFFFFF',
                }
            }}
        >
            <Typography
                variant="body1"
                color="#FFFFFF"
            >
                {text}
            </Typography>
        </Link>
    </Box>
);

export default class Contact extends React.Component {
    render() {
        return (
            <Box
                sx={{
                    my: 2,
                    mx: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}
            >
                <Typography
                    variant="h5"
                    color="inherit"
                    sx={{
                        marginBottom: 2
                    }}
                >
                    <ContactPageIcon color="info" /> <b>CONTACT</b>
                </Typography>
                <ContactItem
                    icon={<WebIcon />}
                    text={UserInfo.website}
                    href={UserInfo.website}
                />
                <ContactItem
                    icon={<EmailIcon />}
                    text={UserInfo.email}
                    href={`mailto:${UserInfo.email}`}
                />
                <ContactItem
                    icon={<TelegramIcon />}
                    text={UserInfo.telegramID}
                    href={`https://t.me/${UserInfo.telegramID.replace('@', '')}`}
                />
                <ContactItem
                    icon={<MyLocationIcon />}
                    text={UserInfo.location}
                    href={`https://maps.google.com.sg/?q=${UserInfo.location}`}
                />
                <ContactItem
                    icon={<LinkedInIcon />}
                    text={UserInfo.linkedin}
                    href={UserInfo.linkedin}
                />
                <ContactItem
                    icon={<GitHubIcon />}
                    text={UserInfo.github}
                    href={UserInfo.github}
                />
            </Box>
        )
    }
}