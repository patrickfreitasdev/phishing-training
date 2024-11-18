import { MyQRcode } from "@/Components/qr-code";
import kahootImage from "../../images/KahootLogo_Full_white.svg"; // Adjust the path based on your folder structure
import { PlayersCount } from "@/Components/playerCount";
import { Hourglass } from "react-loader-spinner";

export default function Welcome() {
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-blue-500 min-h-[300px]">
                <div className="max-w-screen-xl w-full flex items-center justify-center gap-6 p-3 flex-wrap m-auto">
                    <h1 className="text-6xl text-white font-bold">
                        Join the game!
                        <small className="block text-2xl">
                            Scan the QR code, game pin 5256
                        </small>
                    </h1>
                    <MyQRcode />
                </div>
            </div>
            <div className="bg-blue-600 flex-1 ">
                <div className="flex p-8 justify-center lg:justify-between items-start max-w-screen-xl w-full m-auto flex-wrap gap-6">
                    <PlayersCount />
                    <img width={280} src={kahootImage} />
                    <div className="flex gap-4">
                        <Hourglass
                            visible={true}
                            height="40"
                            width="40"
                            ariaLabel="hourglass-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            colors={["#ffff", "#72a1ed"]}
                        />
                        <span className="text-white text-3xl">
                            Waiting for players
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
