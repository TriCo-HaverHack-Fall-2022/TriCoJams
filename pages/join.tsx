import React from "react";
import Header from "./components/header";
import BasicTable from "./components/table";
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import { Button } from "react-bootstrap";
import { getDatabase, ref, set, get } from "firebase/database";
import Link from "next/link";

export default function Form() {
    const columns = React.useMemo(
        () => [
            {
                Header: "Session Name",
                accessor: "session" // accessor is the "key" in the data
            },
            {
                Header: "Genre",
                accessor: "genre"
            },
            {
                Header: "Date",
                accessor: "date"
            },
            {
                Header: "Time",
                accessor: "time"
            },
            {
                Header: "Location",
                accessor: "location"
            },
            {
                Header: "Roles",
                accessor: "roles"
            }
        ],
        []
        );
    const data = React.useMemo(
        () => [
            {
                session: "Thursday Night Jams",
                genre: "Jazz",
                date: "10/01/22",
                time: "10:00 PM",
                location: "Parrish Hall, Swarthmore",
                roles: "Drummer, Bassist, Guitarist, Keyboardist..."
            },
            {
                session: "Tuesday Night Jam",
                genre: "Classical",
                date: "11/05/22",
                time: "5:00 PM",
                location: "LPAC Building, Swarthmore",
                roles: "Drummer, Bassist, Guitarist, Keyboardist..."
            },
            {
                session: "Wednesday Night Jams",
                genre: "Blues",
                date: "11/12/22",
                time: "2:00 PM",
                location: "Music Hall, Swarthmore",
                roles: "Drummer, Bassist, Guitarist, Keyboardist..."
            },
            {
                session: "Friday Night Jams",
                genre: "Reggae",
                date: "11/16/22",
                time: "4:00 PM",
                location: "LANG Music, Swarthmore",
                roles: "Drummer, Bassist, Guitarist, Keyboardist..."
            },
            {
                session: "Saturday Night Jams",
                genre: "Any",
                date: "12/06/22",
                time: "9:00 PM",
                location: "Parrish Hall, Swarthmore",
                roles: "Drummer, Bassist, Guitarist, Keyboardist..."
            },

        ],
        []
    );

    /*
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
    console.error(error);
    });*/

    return (
        <div className={styles.container}>
        <Head>
          <title>TriCoJams</title>
          <meta name="description" content="Jam session finder for the Swarthmore/Haverford/Bryn Mawr community" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
            <Header/>
            <Link href='/#home'>
                <Button className="m-4">
                    Back
                </Button>
            </Link>
            <BasicTable columns={columns} data={data}/>
        </main>
      </div>
    )
  }