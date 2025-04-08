import { Chessboard } from "react-chessboard";

export default function App() {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Chessboard id="BasicBoard" boardWidth={500} />
        </div>
    );
}