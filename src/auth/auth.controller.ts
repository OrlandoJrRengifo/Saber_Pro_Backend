import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignUpDto } from './dto/sign-up.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    @ApiOperation({ summary: 'Registrar usuario en Auth de Supabase' })
    async signup(@Body() singUpDto: SignUpDto) {
        return this.authService.signUp(singUpDto);
    }

    @Get('profile')
    @ApiBearerAuth() 
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Verificar si el token es valido' })
    getProfile(@Req() req) {
        return { status: 'active', user: req.user };
    }

    @Post('login')
    @ApiOperation({ summary: 'Iniciar sesion y obtener el token JWT' })
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}