import React from "react";
import "./css/watchList.css";
import MovieTile from "./microComponents/MovieTile";

const WatchList = () => {
  const kidsListArr = [
    {
      title: "The Nightmare Before Christmas",
      releaseYear: 1993,
      url: "https://resizing.flixster.com/T6aXMvfque7L8iUUN6n3lT1EItI=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p15096_p_v10_ak.jpg",
    },
    {
      title: "Gremlins",
      releaseYear: 1984,
      url: "https://resizing.flixster.com/A8c_oX9MSWNAZgjBzK1HVlR2AGw=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/39750/39750_aa.jpg",
    },
    {
      title: "Ghostbusters",
      releaseYear: 1984,
      url: "https://resizing.flixster.com/MlnneIx-1j3F1gjMk3QgpABMBas=/fit-in/180x240/v2/https://resizing.flixster.com/0nGXk74tgLRxURPzFaK6JrlaZwk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzA3M2YyNDRhLTk0NDYtNDI5Yy1iOTUxLTljYzQ2NzEzN2I3YS53ZWJw",
    },
    {
      title: "It's The Great Pumpkin, Charlie Brown",
      releaseYear: 1966,
      url: "https://resizing.flixster.com/9zBJQkhDGhdKGl0hx32k3-uvNMg=/fit-in/180x240/v2/https://resizing.flixster.com/NdvmOz-8pNQYPW0A4BLaWTfvG8U=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2VjZWRhNDMwLTY5YmEtNGM2OC04ZmUzLTdiZGE1ZTRhNDUyNS5qcGc=",
    },
    {
      title: "Beetlejuice",
      releaseYear: 1988,
      url: "https://resizing.flixster.com/x3ANUGvCArDnBUz7tU76nzFQRpU=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/1673/1673_ab.jpg",
    },
    {
      title: "Coco",
      releaseYear: 2017,
      url: "https://resizing.flixster.com/Gmkhr84UQuRdqma8bePxaLsBJzE=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/172117/172117_ac.jpg",
    },
    {
      title: "Wallace & Gromit: The Curse of the Were-Rabbit",
      releaseYear: 2005,
      url: "https://static.wikia.nocookie.net/wallaceandgromit/images/f/f2/Wallace_gromit_were_rabbit_poster.jpg/revision/latest/smart/width/250/height/250?cb=20130224053541",
    },
    {
      title: "Harry Potter",
      releaseYear: 2001,
      url: "https://resizing.flixster.com/SFRFhon-ssCQkKyHenizYuQAmXY=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p28630_p_v8_at.jpg",
    },
    {
      title: "Monsters Inc",
      releaseYear: 2001,
      url: "https://resizing.flixster.com/-a4pOhlAKzp0SmAMVFv_dW3r0So=/fit-in/180x240/v2/https://resizing.flixster.com/YL2uY_OxeLWt2fgb9Pt740dkkLM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzVmMjE2ODVkLTU3MGMtNGQxYS1hYTJjLWRmMTMyMDIyOTVlZi53ZWJw",
    },
    {
      title: "Scooby-Doo on Zombie Island",
      releaseYear: 1998,
      url: "https://resizing.flixster.com/gDq3Y56N-sDXzsMv_i9RiZorTu4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p21515_p_v10_ab.jpg",
    },
    {
      title: "Ghostbusters",
      releaseYear: 1984,
      url: "https://resizing.flixster.com/N1WObv-1Bqbk-usNtOHdO_FMNGY=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p36328_p_v10_aj.jpg",
    },
    {
      title: "Tim Burton's Corpse Bride",
      releaseYear: 2005,
      url: "https://resizing.flixster.com/MlnneIx-1j3F1gjMk3QgpABMBas=/fit-in/180x240/v2/https://resizing.flixster.com/0nGXk74tgLRxURPzFaK6JrlaZwk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzA3M2YyNDRhLTk0NDYtNDI5Yy1iOTUxLTljYzQ2NzEzN2I3YS53ZWJw",
    },
    {
      title: "Caroline",
      releaseYear: 2009,
      url: "https://resizing.flixster.com/AfKP4ayHn1DWhJJy_QJ9qrhQpB0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p177367_p_v10_ae.jpg",
    },
    {
      title: "Ghostbusters",
      releaseYear: 1984,
      url: "https://resizing.flixster.com/MlnneIx-1j3F1gjMk3QgpABMBas=/fit-in/180x240/v2/https://resizing.flixster.com/0nGXk74tgLRxURPzFaK6JrlaZwk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzA3M2YyNDRhLTk0NDYtNDI5Yy1iOTUxLTljYzQ2NzEzN2I3YS53ZWJw",
    },
    {
      title: "E.T. The Extra-Terrestrial",
      releaseYear: 1982,
      url: "https://resizing.flixster.com/oTvqJMdTlwToTOk9Ix6YoIgSIPM=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p10998_p_v8_ao.jpg",
    },
    {
      title: "Paranorman",
      releaseYear: 2012,
      url: "https://resizing.flixster.com/ABK0HT0Kt_T5UDjSwG0IDD_TTLk=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9047424_p_v10_ay.jpg",
    },
    {
      title: "Halloweentown",
      releaseYear: 1998,
      url: "https://resizing.flixster.com/VDvKQc9nsaUfd-R-QLn_RbZdl24=/fit-in/180x240/v2/https://resizing.flixster.com/Bt126St39SEYNjzff_lUJcUP-7c=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2M5ZWU1NmZkLWYwZGEtNDgwZC1iMTYwLTc0ZDgwYzY4NGQ0ZS53ZWJw",
    },
    {
      title: "Hotel Transylvania",
      releaseYear: 2012,
      url: "https://resizing.flixster.com/AUUIT-PnP9MSe0HpgF_oebZDnVc=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/116013/116013_ad.jpg",
    },
    {
      title: "Hocus Pocus",
      releaseYear: 1993,
      url: "https://resizing.flixster.com/XlEHHdF5srHlRi_F49In4-9hWHo=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p14911_p_v10_ac.jpg",
    },
    {
      title: "Return of Oz",
      releaseYear: 1985,
      url: "https://resizing.flixster.com/gTN3hnXL_7h1lDsC6wOOR3ujSNM=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8719_p_v10_aa.jpg",
    },
    {
      title: "The Adventures of Ichabod and Mr Toad",
      releaseYear: 1949,
      url: "https://resizing.flixster.com/L1MRYMNc8iNm8sBoz6PGxO0GF6o=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p6335_p_v13_ac.jpg",
    },
    {
      title: "Frankenweenie",
      releaseYear: 2012,
      url: "https://resizing.flixster.com/nM07NMTU3vpReFkRTZn2QOBtWfI=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9125996_p_v10_aa.jpg",
    },
    {
      title: "The Addams Family",
      releaseYear: 2019,
      url: "https://resizing.flixster.com/aexbMQTfZxlZOspdUXweceWPf4s=/fit-in/180x240/v2/https://resizing.flixster.com/UeLgzm9fTSPyOxvNF5h8DhGZdJw=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzJmNTcyYWM3LWEzOGUtNGYxMi04YmY1LWQ1YjExMmRmYzVmMS53ZWJw",
    },
    {
      title: "Monster House",
      releaseYear: 2006,
      url: "https://resizing.flixster.com/ufSB17K4-lzOwAvRrId4SpV9xCc=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/44090/44090_aa.jpg",
    },
    {
      title: "Goosebumps",
      releaseYear: 2015,
      url: "https://resizing.flixster.com/MlnneIx-1j3F1gjMk3QgpABMBas=/fit-in/180x240/v2/https://resizing.flixster.com/0nGXk74tgLRxURPzFaK6JrlaZwk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzA3M2YyNDRhLTk0NDYtNDI5Yy1iOTUxLTljYzQ2NzEzhttps://resizing.flixster.com/c3pHK_g9NmxRDYa3cLxg-AVyYqk=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p11819892_p_v10_ac.jpg",
    },
    {
      title: "Casper",
      releaseYear: 1995,
      url: "https://resizing.flixster.com/JH21Q8usvZQvVaRHD7QxKQ2q9WQ=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p16786_p_v13_bc.jpg",
    },
  ];

  return (
    <div className={"Watch-List"}>
      <div>
        <span>Essential Kids Halloween Movies</span>
        {kidsListArr.map((movieStats) => {
          return <MovieTile movieStats={movieStats} />;
        })}
      </div>
      <div>Scary List</div>
    </div>
  );
};

export default WatchList;
