import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
    Typography,
    Dialog,
    DialogContent,
    IconButton,
    DialogTitle,
    DialogActions,
    Popover,
    Snackbar
} from '@mui/material';
import {getEventsBetweenDates, userEventRegister} from "../provider/b&dProvider.ts";
import {styled} from "@mui/system";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import {useAuth} from "../provider/authProvider.tsx";
import {DatesSetArg, EventClickArg} from "@fullcalendar/core";
import {CalendarEvent} from "../interfaces/events.ts";



const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Calendar: React.FC = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const {isAuthenticated} = useAuth();
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const getEvents = async (startDate: Date, endDate: Date) => {
        getEventsBetweenDates(startDate, endDate)
            .then((response) => {
                const formattedEvents = response.map((event) => {
                    const startDateObj = new Date(event.start_date);
                    const endDateObj = new Date(event.end_date);

                    return {
                        id: event.id.toString(),
                        title: event.title,
                        start: startDateObj,
                        end: endDateObj,
                        description: event.description,
                    };
                });
                setEvents(formattedEvents);
            })
            .catch((error) => {
                console.error('Error fetching events:', error);
            });
    };

    const handleEventClick = (clickInfo:  EventClickArg) => {
        setSelectedEvent(events.find((event) => event.id === clickInfo.event.id) || null);
    };

    const handleClose = () => {
        // setOpen(false);
        setSelectedEvent(null);
    };
    const handleDatesSet = (dateInfo: DatesSetArg) => {
        console.log(dateInfo.start, dateInfo.end);
        getEvents(dateInfo.start, dateInfo.end);
    };

    const handleRegister = () => {
        if (selectedEvent) {
            userEventRegister(parseInt(selectedEvent.id))
                .then(() => {
                    setSnackbarMessage('Inscription réussie');
                    setSnackbarOpen(true);
                })
                .catch(() => {
                    setSnackbarMessage('Erreur lors de l\'inscription');
                    setSnackbarOpen(true);
                });
        }
        handleClose();
    };

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventClick={handleEventClick}
                datesSet={handleDatesSet}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    meridiem: false,
                }}
                displayEventTime={true}
                timeZone={'UTC'}
            />

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={selectedEvent !== null}
            >
                <DialogTitle sx={{m: 0, p: 2}} id="customized-dialog-title">
                    {selectedEvent?.title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
                <DialogContent dividers>
                    {selectedEvent && (
                        <>
                            <Typography sx={{mt: 2}}>
                                Début: { new Date(selectedEvent.start).toLocaleString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                timeZone: 'UTC',
                            })}
                            </Typography>
                            <Typography sx={{mt: 2}}>
                                Fin: {new Date(selectedEvent.end).toLocaleString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                timeZone: 'UTC',
                            })}
                            </Typography>
                            <Typography sx={{mt: 2}}>
                                Description: {selectedEvent.description}
                            </Typography>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Popover
                        id="mouse-over-popover"
                        sx={{
                            pointerEvents: 'none',
                        }}
                        open={open && !isAuthenticated} // Ouvrir le popover uniquement si le bouton est désactivé
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                    >
                        <Typography sx={{p: 1}}>
                            Veuillez vous connecter afin de pouvoir vous inscrire.
                        </Typography>
                    </Popover>
                    <div // Wrapper autour du bouton et du popover
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onClick={handleClose}
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        style={{display: 'inline-block'}} // Assurez-vous qu'il est affiché en ligne
                    >
                        <Button
                            disabled={!isAuthenticated}
                            onClick={handleRegister}
                        >
                            S'inscrire
                        </Button>
                    </div>
                </DialogActions>
            </BootstrapDialog>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={1000}
                message={snackbarMessage}

            />
        </>
    );
};

export default Calendar;
