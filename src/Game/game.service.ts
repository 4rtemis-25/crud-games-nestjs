import { Injectable } from "@nestjs/common";
import { Game } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GameService {

    constructor(private prisma: PrismaService) {}

    async getAllGames(): Promise<Game[]>{
        return this.prisma.game.findMany();
    }

    async getGameById(id: number): Promise<Game> {
        return this.prisma.game.findUnique({
            where: {
                id
            }
        })
    }

    async createGame(data: Game): Promise<Game> {
        return this.prisma.game.create({
            data
        })
    }

    async updateGame(id: number, data: Game): Promise<Game> {
        return this.prisma.game.update({
            where: {
                id
            },
            data
        })
    }

    async deleteGame(id: number): Promise<Game> {
        return this.prisma.game.delete({
            where: {
                id
            }
        })
    }

}