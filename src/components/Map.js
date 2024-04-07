require('dotenv').config()

export default function MapAtLocation(props) {
    return (
        <div>
            <div id="map"></div>
            <div id="pano"></div>
            <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_CLOUD_API_KE};&callback=initialize&v=weekly`}
            defer
            ></script>
            <iframe
                className="w-screen h-screen"
                width="600"
                height="450"
                // style="border:0"
                loading="lazy"
                allowFullScreen
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_CLOUD_API_KEY}&q=${props.locationQuery}`}>
            </iframe>
        </div>
        
        
    );
}