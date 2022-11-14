import { Body, Controller, Delete, Get, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import { WatchlistService } from "./watchlist.service";
import { WatchListDTO } from "./dto";
import { JwtAuthGuard } from "../../guards/jwt-guard";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateAssetResponse } from "./response";

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @ApiTags('API')
  @ApiResponse({status: 201, type: CreateAssetResponse})
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createAsset (@Body() assetDto: WatchListDTO, @Req() request): Promise<CreateAssetResponse> {
    const user = request.user
    return this.watchlistService.createAsset(user, assetDto)
  }

  @ApiTags('API')
  @ApiResponse({status: 200})
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteAsset (@Query('id') assetId: string, @Req() request): Promise<boolean>  {
    const {id} = request.user
    return this.watchlistService.deleteAsset(id, assetId)
  }
}
