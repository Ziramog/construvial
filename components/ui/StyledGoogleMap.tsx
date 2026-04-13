"use client"

import { useEffect, useRef, useState, useCallback } from "react"

// Google Maps style JSON — dark grayscale with road contrast
const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#1d1d1d" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#8a8a8a" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#1d1d1d" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2a2a2a" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1d1d1d" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#aaaaaa" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0e0e0e" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
]

// Custom yellow marker SVG
const yellowMarkerSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 32 44">
    <path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 28 16 28s16-16 16-28C32 7.16 24.84 0 16 0z" fill="#facc15"/>
    <circle cx="16" cy="16" r="7" fill="#0a0a0a"/>
  </svg>
`

// Fallback styled embed for when API key is not available
const StyledMapFallback = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.8!2d-64.3010544!3d-32.2029349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cd6319c76431f1%3A0x80a3106ee98bc03b!2sConstruvial%20Sa!5e0!3m2!1ses!2sar!4v1"

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      style={{ border: 0, filter: "grayscale(100%) contrast(110%) brightness(75%)" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación Construvial"
      className="w-full h-full"
    />
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GoogleMaps = any

export function StyledGoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [hasError, setHasError] = useState(false)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

  const initMap = useCallback(() => {
    if (!mapRef.current) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const google = (window as any).google as GoogleMaps | undefined
    if (!google || !google.maps) {
      setHasError(true)
      return
    }

    const location = { lat: -32.2029349, lng: -64.3010544 }

    // Create custom marker icon from SVG
    const markerIcon = {
      url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(yellowMarkerSVG),
      scaledSize: new google.maps.Size(32, 44),
      anchor: new google.maps.Point(16, 44),
    }

    const map = new google.maps.Map(mapRef.current, {
      center: location,
      zoom: 15,
      styles: mapStyles,
      disableDefaultUI: false,
      zoomControl: true,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      scaleControl: false,
    })

    // Custom yellow marker
    new google.maps.Marker({
      position: location,
      map: map,
      icon: markerIcon,
      title: "Construvial S.A.",
    })
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const google = (window as any).google as GoogleMaps | undefined

    // If Google Maps JS API is already loaded
    if (google && google.maps) {
      initMap()
      return
    }

    // Load Google Maps JS API dynamically
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
    script.async = true
    script.defer = true
    script.onerror = () => setHasError(true)
    script.onload = () => {
      initMap()
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove script if component unmounts before load
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [initMap, apiKey])

  // Fallback to styled iframe if API key missing or error
  if (hasError || !apiKey) {
    return <StyledMapFallback />
  }

  return (
    <div
      ref={mapRef}
      className="w-full h-full min-h-[240px]"
      style={{ borderRadius: "2px" }}
    />
  )
}
