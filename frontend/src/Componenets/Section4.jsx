import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'redaxios';
import { useState } from 'react';
import SnackbarContent from '@mui/material/SnackbarContent';
import Snackbar from '@mui/material/Snackbar';

function Section4() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [circularprogress, setCircularprogress] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
    });

    const handleSnackbarOpen = (message) => {
        setSnackbar({
            open: true,
            message: message,
        });
    };

    const handleSnackbarClose = () => {
        setSnackbar({
            ...snackbar,
            open: false,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email !== "" && message !== "") {
            setCircularprogress(true);
            try {
                const response = await axios.post("https://jgkihiu-portfolio.onrender.com/api/user", {
                    email, message
                });
                if (response.data === "successful") {
                    handleSnackbarOpen("Message Sent");
                } else {
                    handleSnackbarOpen("Failed. Try Again");
                }
            } catch (error) {
                handleSnackbarOpen("An error occurred. Try Again");
            } finally {
                setCircularprogress(false);
            }
        } else {
            handleSnackbarOpen("Fill all fields");
        }
    };

    return (
        <div className='flex flex-col justify-around items-center mt-40 mb-10 gap-4'>
            <Box sx={{ width: 500 }}>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={snackbar.open}
                    onClose={handleSnackbarClose}
                    // message={snackbar.message}
                    key={`${snackbar.vertical}-${snackbar.horizontal}`}

                >
                    <SnackbarContent
                        message={snackbar.message}
                        sx={{ backgroundColor: 'teal', color: "white" }}
                    />
                </Snackbar>
            </Box>
            <div className='flex flex-col gap-4 justify-around items-center'>
                <div className="text-slate-400 mb-10">
                    <span className="flex flex-row items-center lg:gap-10 gap-4 text-xl text-teal-400">
                        <h1><span className="text-teal-400">04.</span>What Next?</h1>
                    </span>
                    <br />
                    <div>
                        <h1 className='text-slate-100 text-3xl mb-10'>Hire Me</h1>
                        <p className='text-slate-400'>
                            I am currently open to new opportunities where I can employ my skills,
                            preferably in fast-paced startups or <br />any place that offers me an opportunity
                            to learn and grow as a software engineer. Sounds like you?
                        </p>
                    </div>
                </div>
                <div className="bg-slate-400 p-10 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="email"
                                label="Email"
                                variant="standard"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                id="message"
                                label="Message"
                                variant="standard"
                                helperText="Write a message"
                                onChange={(e) => setMessage(e.target.value)}
                                multiline
                            />
                        </Box>
                        <Button
                            type='submit'
                            className='flex items-center gap-2 px-4 py-2 border rounded-md border-teal-400 text-white'
                            sx={{
                                backgroundColor: 'teal',
                                '&:hover': {
                                    backgroundColor: 'darkslategray'
                                },
                                display: circularprogress ? 'none' : 'flex'
                            }}
                        >
                            <p className='ml-2 text-white'>Submit</p>
                        </Button>
                        {circularprogress && (
                            <Button
                                disabled
                                className='flex items-center gap-2 px-4 py-2 border rounded-md border-teal-400 text-white'
                                sx={{
                                    backgroundColor: 'teal',
                                    '&:hover': {
                                        backgroundColor: 'darkslategray'
                                    }
                                }}
                            >
                                <CircularProgress size={20} sx={{ color: 'white' }} />
                                <p className='ml-2 text-white'>Sending...</p>
                            </Button>
                        )}
                    </form>
                </div>
                <a href="tel:+254742377527">
                    <button className='text-teal-400 border rounded-md px-2 py-1 border-teal-400'>
                        Let`s connect
                    </button>
                </a>
            </div >
        </div >
    );
}

export default Section4;
