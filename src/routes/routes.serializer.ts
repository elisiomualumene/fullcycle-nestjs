import { DirectionsResponseData } from '@googlemaps/google-maps-services-js';
import { Route } from '@prisma/client';

export class RoutesSerializer implements Omit<Route, 'directions'> {
  source: { name: string } & { location: { lat: number; lng: number } };
  destination: { name: string } & { location: { lat: number; lng: number } };
  id: string;
  name: string;
  distance: number;
  duration: number;
  directions: DirectionsResponseData & { request: any };
  created_at: Date;
  updated_at: Date;

  constructor(route: Route) {
    this.id = route.id;
    this.created_at = route.created_at;
    this.destination = route.destination;
    this.directions = JSON.parse(route.directions as string);
    this.distance = route.distance;
    this.duration = route.duration;
    this.name = route.name;
    this.source = route.source;
    this.updated_at = route.updated_at;
  }
}
