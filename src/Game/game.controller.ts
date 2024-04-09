import { Body, Controller, Get, Post } from "@nestjs/common";
import { GameService } from "./game.service";
import { Game } from "@prisma/client";

@Controller('games')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Get()
    async getAllGames(){
        this.gameService.getAllGames()
    }

    @Post()
    async createGame(@Body() data: Game){
        this.gameService.createGame(data)
    }
}