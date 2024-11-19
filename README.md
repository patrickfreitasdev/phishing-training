## Phishing Training

This project uses Laravel along with Inertia and React to create a phishing training app.

It has two routers

`"/"` ( home page ) = waiting room for the game with a QR code

`/join-game` = phishing page, a statick page that will ask for user to pay more attention to the URLs, this /join-game page can be extended to ask for credentials and see how many people would fall for it.

### Installation

Download the project and run the following commands:

```
composer install

npm install

npm run dev

php artisan migrate

php artisan serve
```

If you would like to receive the number of people accessing the /join-game page in real time, you can use Pusher.

Include in your .env file the following variables:

```
PUSHER_APP_ID=""
PUSHER_APP_KEY=""
PUSHER_APP_SECRET=""
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME="http"
PUSHER_APP_CLUSTER=""

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

```

Note: The counter increases up to 4 programmatically to similate the number of people accessing the page, but it doesn't save the state, meaning that if you refresh the page the counter will reset. We also don't save any data to control if the /join-game access is new or returning visitors, so each refresh the counter will increase.

### Usage

This is a training project and is not intended to be used for malicious purposes.

This app simulates a waiting room for an online game with a QR code, by scanning the QR code the user is redirected to a phishing page. It won't ask for any credentials.