import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

export type LocalizationType = {
  lat: number
  lng: number
}

export type LabelMarkerOptions = google.maps.MarkerLabel

export type MapProps = {
  center: LocalizationType
  label?: LabelMarkerOptions
}


const Map = ({ center, label }: MapProps) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.GOOGLE_MAPS_API_KEY}`
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: '100%', width: '100%' }}
      center={center}
      zoom={15}
    >
      <Marker position={center} options={{ label }} />
    </GoogleMap>
  ) : <></>
}

export default Map