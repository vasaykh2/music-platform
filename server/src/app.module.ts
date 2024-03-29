import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.modulees';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static'),
		}),
		TrackModule,
		MongooseModule.forRoot('mongodb://localhost:27017/music-platform'),
		FileModule,
	],
})
export class AppModule {}
