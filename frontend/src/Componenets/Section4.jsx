import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'redaxios'
import { useState } from 'react';
function Section4() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = async () => {
        const response = await axios.post("", {
            email, message
        })
        if (response.data == "success") {
            alert("sent!")
        }
    }
    return (
        <div className='flex flex-col items-center justify-around mt-20 mb-10 gap-4'>
            <div className='flex flex-col gap-4 items-center'>
                <div className="text-slate-400 mb-10">
                    <span className="flex flex-row items-center lg:gap-10 gap-4 text-xl text-teal-400"><h1 ><span className="text-teal-400">04.</span>What Next?</h1></span><br />
                    <div>
                        <h1 className='text-slate-100 text-3xl mb-10'>Hire Me</h1>
                        <p className='text-slate-400'>I am currently open to new oppoturnites where I can employ my skills ,<br /> preferably in fast paced startups or any place that offers me an apportunity <br />to learn and grow as software engineer . Sounds like you ?</p>
                    </div>
                </div>

                < div className="bg-slate-400  p-10 rounded-lg" >
                    <form action="" onSubmit={handleSubmit}>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="standard-helperText"
                                label="Email"
                                variant="standard"
                                onChange={(e) => { setEmail(e.target.value) }}

                            />
                            <TextField
                                id="standard-helperText"
                                label="Message"
                                variant="standard"
                                // defaultValue="Hello There, my name is ..."
                                helperText=" Write a message"
                                onChange={(e) => { setMessage(e.target.value) }}
                                multiline
                            />
                        </Box>
                        <Button variant='contained' type='submit'>Submit</Button>
                    </form>
                </div>
                <a href="tel:+254742377527">  <button className='text-teal-400 border rounded-md px-2 py-1 border-teal-400'>Let `s connect</button></a>

            </div>
        </div >
    )
}

export default Section4