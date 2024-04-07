require('dotenv').config()

export default function Map() {
    return (
        <iframe
            width="600"
            height="450"
            // style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_CLOUD_API_KEY}&q=Space+Needle,Seattle+WA`}>
        </iframe>
    );
}