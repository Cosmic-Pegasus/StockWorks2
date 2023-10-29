import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import '../Style.css'
import { Card, Typography } from "@material-tailwind/react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";


const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",

    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];


export default function Nifty() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Navbar b1={"Nifty"} />
            <Sidebar />

            <div className="stocks-table">
                <h1 className="stitle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                    </svg>
                    Nifty Stocks</h1>

                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            <p className="urbanist"> {head}</p>
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(({ name, job, date }, index) => (
                                <tr key={name} className="even:bg-blue-gray-50/50">
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            <p className="urbanist"> {name}</p>
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            <p className="urbanist"> {job}</p>
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            <p className="urbanist"> {date}</p>
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                            <p className="urbanist" onClick={handleOpen}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                                </svg>
                                            </p>
                                        </Typography>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>



                <Dialog
                    open={open}
                    handler={handleOpen}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader><p className="chart-dialog-title">Chart View</p></DialogHeader>
                    <DialogBody>
                        <div className="chart-dialog">
                            </div>
                    </DialogBody>
                    <DialogFooter>

                        <Button variant="gradient" color="green" onClick={handleOpen}>
                            <span>Okay</span>
                        </Button>
                    </DialogFooter>
                </Dialog>

            </div>

        </>
    )
}
