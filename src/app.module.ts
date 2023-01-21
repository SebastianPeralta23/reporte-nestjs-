import { Module } from '@nestjs/common';
import { ReporteModule } from './reporte/reporte.module';
@Module({
  imports: [ReporteModule],
})
export class AppModule {}
