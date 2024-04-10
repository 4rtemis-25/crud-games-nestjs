import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { GameService } from "./game.service";
import { Game } from "@prisma/client";

@Controller('games')
export class GameController {
    constructor(private gameService: GameService) { }

    @Get()
    async getAllGames() {
        return this.gameService.getAllGames()
    }

    @Post()
    async createGame(@Body() data: Game) {
        return this.gameService.createGame(data)
    }

    @Get(':id')
    async getGameById(@Param('id') id: string) {
        const gameFound = await this.gameService.getGameById(Number(id))
        if (!gameFound) throw new NotFoundException('Game does not exist')
        return gameFound
    }

    @Delete(':id')
    async deleteGame(@Param('id') id: string) {
        try {
            return await this.gameService.deleteGame(Number(id))
        } catch (error) {
            throw new NotFoundException("Game does not exist")
        }
    }

    @Put(':id')
    async updateGame(@Param('id') id: string, @Body() data: Game) {
        try {
            return await this.gameService.updateGame(Number(id), data)
        } catch (error) {
            throw new NotFoundException("Game does not exist")
        }
    }
}