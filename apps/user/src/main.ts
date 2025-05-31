import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';

/**
 * Initializes and starts the NestJS application using the {@link UserModule}.
 *
 * The application listens on the port specified by the environment variable `port`, or defaults to 3000 if not set.
 */
async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
