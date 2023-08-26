import { Client, PlaceInputType } from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config/dist';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  constructor(
    private googleMapsClient: Client,
    private configService: ConfigService,
  ) {}

  async findPlace(text: string) {
    const { data } = await this.googleMapsClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['place_id', 'formatted_adress', 'geometry', 'name'],
        key: this.configService.get<string>('GOOGLE_MAPS_API_KEY'),
      },
    });
    return data;
  }
}
