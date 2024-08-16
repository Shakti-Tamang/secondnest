import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './anu/globalFilter/shakti.globalfilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Apply the global exception filter
  
  app.useGlobalFilters(new AllExceptionsFilter ())
  await app.listen(3002);
}
bootstrap();
