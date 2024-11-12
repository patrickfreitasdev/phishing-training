import { useEffect, useState } from "react";

export function PlayersCount() {
    const [players, setPlayers] = useState(0);
    // increase the player count every 5 seconds to 4 players and stop

    useEffect(() => {
        const maxSimulatedPlayers = 4;
        const secondsInterval = 3;

        const interval = setInterval(() => {
            setPlayers((prevPlayers) => {
                if (prevPlayers + 1 >= maxSimulatedPlayers) {
                    clearInterval(interval);
                }
                return prevPlayers + 1;
            });
        }, secondsInterval * 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

     useEffect(() => {
        // Listen to the broadcast event
        // @ts-ignore
        const channel = window.Echo.channel('game-channel');
       
        // @ts-ignore
        channel.listen('.user-joined', (event) => {
            console.log(event.message); // Log the message for debugging
            setPlayers((prevPlayers) => prevPlayers + 1);
        });

        // Cleanup the listener when the component unmounts
        return () => {
            channel.stopListening('.user-joined');
        };
    }, []);

    return (
        <div>
            <h2 className="text-6xl text-white font-bold">
                Players: {players}
            </h2>
        </div>
    );
}
