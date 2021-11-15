import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

const TEST_ENDPOINT_BASE = '/v1/connected_accounts';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );

    await app.init();
  });

  test(`${TEST_ENDPOINT_BASE} (POST) should throw BadRequest`, () => {
    return request(app.getHttpServer())
      .post(TEST_ENDPOINT_BASE)
      .expect(HttpStatus.BAD_REQUEST);
  });

  test(`${TEST_ENDPOINT_BASE} (POST) should throw BadRequest`, () => {
    return request(app.getHttpServer())
      .post(TEST_ENDPOINT_BASE)
      .send({
        provider: 'google_oauth2',
        unknown: 'value',
      })
      .expect(HttpStatus.BAD_REQUEST);
  });
});
