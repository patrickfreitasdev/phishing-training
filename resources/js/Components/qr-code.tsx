import QRCode from "react-qr-code";

export function MyQRcode() {
    // get current url to make qr code dynamic
    const currentUrl = window.location.href
    // remove slash from the end of the url if it exists
    const cleanUrl = currentUrl.endsWith("/") ? currentUrl.slice(0, -1) : currentUrl
    const url = cleanUrl + "/join-game"

    return (
        <div className="p-2">
            <QRCode size={200} value={url} />
        </div>
    );
}
