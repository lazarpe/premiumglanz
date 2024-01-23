"use client"

import React, {useEffect} from "react";
import {Loader} from '@googlemaps/js-api-loader';

export function Map() {

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {

        const initMap = async () => {

            const loader = new Loader({
                apiKey: 'AIzaSyBdE2ftlpj9otbGfgPjKnq20r2lojXyj8Q',
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');

            const position = {
                lat: 43.642693,
                lng: -79.3871189
            }

            const mapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'
            }

            const map = new Map(mapRef.current, mapOptions);
        }

        initMap();
    }, []);

    return (
        <div ref={mapRef} />
    );
}