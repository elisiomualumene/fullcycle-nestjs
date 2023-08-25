import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private prismaService: PrismaService) {}

  create({ destination_id, name, source_id }: CreateRouteDto) {
    return this.prismaService.route.create({
      data: {
        name: name,
        source: {
          name: source_id,
          location: {
            lat: 0,
            lng: 0,
          },
        },
        destination: {
          name: destination_id,
          location: {
            lat: 0,
            lng: 0,
          },
        },
        distance: 0,
        duration: 0,
        directions: '{}',
      },
    });
  }

  findAll() {
    return this.prismaService.route.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route ${updateRouteDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
